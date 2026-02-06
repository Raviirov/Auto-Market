import { useRef, useState, useEffect } from "react";

export default function useSmartSlider({ gap = 30, totalItems = 0 }) {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);

  const [moveAmount, setMoveAmount] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (!cardRefs.current[0]) return;

    const cardWidth = cardRefs.current[0].offsetWidth;
    setMoveAmount(cardWidth + gap);
  }, [gap]);

  const getMaxIndex = () => {
    if (!sliderRef.current || moveAmount === 0) return 0;

    const visibleCount = Math.round(sliderRef.current.clientWidth / moveAmount);

    return Math.max(totalItems - visibleCount, 0);
  };

  const handleNext = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const maxIndex = getMaxIndex();
    const currentIndex = Math.round(sliderRef.current.scrollLeft / moveAmount);
    const nextIndex = currentIndex>= maxIndex ? 0 : currentIndex + 1;

    sliderRef.current.scrollTo({
      left: nextIndex * moveAmount,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const maxIndex = getMaxIndex();
    const currentIndex = Math.round(sliderRef.current.scrollLeft / moveAmount);

    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;

    sliderRef.current.scrollTo({
      left: prevIndex * moveAmount,
      behavior: "smooth",
    });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScroll.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = startX.current - e.pageX;
    sliderRef.current.scrollLeft = startScroll.current + delta;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    snapToClosest();
  };

  const onScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      snapToClosest();
    }, 60);
  };

  const snapToClosest = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const index = Math.round(sliderRef.current.scrollLeft / moveAmount);

    sliderRef.current.scrollTo({
      left: index * moveAmount,
      behavior: "smooth",
    });
  };

  return {
    sliderRef,
    cardRefs,
    handleNext,
    handlePrev,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave: onMouseUp,
    onScroll,
  };
}