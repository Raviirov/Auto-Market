import "./style.scss";

function Button({ children, width, height, className = "", style = {} }) {
  return (
    <button 
        className={`custom-button ${className}`}
        style={{width, height, ...style}}
    >
      {children}
    </button>
  );
}

export default Button;