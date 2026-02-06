import "./style.scss";

function Heading(props) {
  return (
    <h1 id="main-heading" className={props.className} style={{textAlign: props.textAlign, ...props.style}}>{ props.title }</h1>
  );
}

export default Heading;