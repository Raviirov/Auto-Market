import { useRef, useState, useEffect } from "react";

export default function Slider(totalCards, gap = 16) {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const [moveAmount, setMoveAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRefs.current[0]) {
        setMoveAmount(cardRefs.current[0].offsetWidth + gap);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [gap]);

  const handleNext = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const currentIndex = Math.floor(
      (sliderRef.current.scrollLeft + 2) / moveAmount
    );

    const nextIndex =
      currentIndex + 1 >= totalCards ? 0 : currentIndex + 1;

    sliderRef.current.scrollTo({
      left: nextIndex * moveAmount,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const currentIndex = Math.floor(
      (sliderRef.current.scrollLeft + 2) / moveAmount
    );

    const prevIndex =
      currentIndex - 1 < 0 ? totalCards - 1 : currentIndex - 1;

    sliderRef.current.scrollTo({
      left: prevIndex * moveAmount,
      behavior: "smooth",
    });
  };

  return {
    sliderRef,
    cardRefs,
    handleNext,
    handlePrev,
  };
}
