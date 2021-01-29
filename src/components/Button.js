import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <div>
      <button
        onClick={(e) => onClick(e)}
        className="btn"
        style={{
          backgroundColor: color,
        }}
      >
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
