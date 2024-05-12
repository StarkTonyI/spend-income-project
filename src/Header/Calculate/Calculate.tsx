import './Calculate.css'

import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.currentTarget;
    const buttonText = target.innerText;

    switch(buttonText) {
      case 'AC':
        setDisplay('0');
        break;
      case '+/-':
        setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display);
        break;
      case '=':
        try {
          // Avoid using eval, consider using a library like math.js for expression evaluation
          setDisplay(eval(display));
        } catch (error) {
          setDisplay('Error');
        }
        break;
      case '%':
        setDisplay((parseFloat(display) / 100).toString());
        break;
      default:
        if (display === '0' && buttonText !== '.') {
          setDisplay(buttonText);
        } else {
          setDisplay(display + buttonText);
        }
    }
  };

  return (
    <div className="calculatorStyle">
      <div className="display">{display}</div>
      <div className="buttonsS">
        <button className="button-knock btn-grey" onClick={handleButtonClick}>AC</button>
        <button className="button-knock btn-grey" onClick={handleButtonClick}>+/-</button>
        <button className="button-knock btn-grey" onClick={handleButtonClick}>%</button>
        <button className="button-knock btn-orange" onClick={handleButtonClick}>/</button>
        <button className="button-knock" onClick={handleButtonClick}>7</button>
        <button className="button-knock" onClick={handleButtonClick}>8</button>
        <button className="button-knock" onClick={handleButtonClick}>9</button>
        <button className="button-knock btn-orange" onClick={handleButtonClick}>*</button>
        <button className="button-knock" onClick={handleButtonClick}>4</button>
        <button className="button-knock" onClick={handleButtonClick}>5</button>
        <button className="button-knock" onClick={handleButtonClick}>6</button>
        <button className="button-knock btn-orange" onClick={handleButtonClick}>-</button>
        <button className="button-knock" onClick={handleButtonClick}>1</button>
        <button className="button-knock" onClick={handleButtonClick}>2</button>
        <button className="button-knock" onClick={handleButtonClick}>3</button>
        <button className="button-knock btn-orange" onClick={handleButtonClick}>+</button>
        <button className="button-knock" onClick={handleButtonClick}>0</button>
        <button className="button-knock" onClick={handleButtonClick}>.</button>
        <button className="button-knock btn-orange" onClick={handleButtonClick}>=</button>
      </div>
    </div>
  );
};


export default Calculator