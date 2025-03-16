import React from "react";

const Level = ({ image, description, options, onAnswer }) => {
  return (
    <div>
      <p>{description}</p>
      <img src={image} alt="Level" />
      <div>
        {options.map((option, index) => (
          <button
            className="choicesGame-button"
            key={index}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Level;
