import React from 'react';
import '../styles/OptionButtons.css';

const OptionButtons = ({ options, onOptionClick }) => {
  return (
    <div className="option-buttons">
      {options.map((option, index) => (
        <button key={index} onClick={() => onOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;