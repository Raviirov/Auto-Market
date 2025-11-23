import "./style.scss";

function Button({ onClick, children, width, height, className = "", style = {} }) {
  return (
    <button 
        onClick={onClick}
        className={`custom-button ${className}`}
        style={{width, height, ...style}}
    >
      {children}
    </button>
  );
}

export default Button;