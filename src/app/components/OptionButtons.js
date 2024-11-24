"use client"
import React, { useState, useEffect }from 'react';
import '../styles/OptionButtons.css';

const OptionButtons = ({ options, onOptionClick }) => {

  const [opc, mixOpc] = useState([]);

  function mezclarOpc(array){
    return [...array].sort(() => Math.random());
  };

  useEffect(() => {
    mixOpc(mezclarOpc(options));
  }, [options]); 

  return (
    <div className="option-buttons">
      {opc.map((option, index) => (
        <button key={index} onClick={() => onOptionClick({option})}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;