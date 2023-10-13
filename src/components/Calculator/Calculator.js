import React, { useEffect, useState } from 'react';
import History from '../History/History';
import Screen from '../Screen/Screen';
import Keypad from '../Keyboard/Keyboard';

// no props because it is a self-contained component
const Calculator = () => {
  const [equation, setEquation] = useState('');
  const [output, setOutput] = useState(0);
  const [history, setHistory] = useState([]);
  // const [historyButtonState, setHistoryButtonState] = useState(false);

  useEffect(() => {
    const historyData = localStorage.getItem('history');
    if (historyData !== null && historyData !== '') {
      setHistory(JSON.parse(historyData));
      // setHistoryButtonState(true);
    }
  }, []);

  const onButtonPress = event => {
    let newEquation = equation;
    const pressedButton = event.target.textContent;
    // console.log(pressedButton);
    if (pressedButton === 'C') return clear();
    else if (pressedButton === 'CE') return clearEntry();
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
      newEquation += pressedButton;
      setEquation(newEquation);
    }
    // returns the index of the element if it is found in the array or -1 if it is not found. 
    else if (['+', '-', '*', '/'].indexOf(pressedButton) !== -1) 
    {
      newEquation += ` ${pressedButton} `;
      setEquation(newEquation);
    } else if (pressedButton === '=') {
      try {
        const evalResult = Function('"use strict";return (' + newEquation + ')')();
        const newOutput = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
        setOutput(newOutput);
        setEquation(newEquation);
      } catch (error) {
        setEquation('');
        alert('Invalid Mathematical Expression');
      }
    } else {
      newEquation = newEquation.trim();
      newEquation = newEquation.substr(0, newEquation.length - 1);
      setEquation(newEquation);
    }
  };
  

  const clearEntry = () => {
    let newEquation = equation;
    const regex = /(\d+(\.\d+)?|\D+)$/g; // Match the last number/operator
    newEquation = newEquation.replace(regex, '');
    setEquation(newEquation);
  };
  

  const clearHistory = () => {
    localStorage.setItem('history', JSON.stringify([]));
    setEquation('');
    setOutput(0);
    setHistory([]);
    // setHistoryButtonState(true);
  };

  const clear = () => {
    let newHistory = localStorage.getItem('history');
    // checks if there is any history if not then
    if (newHistory === null || newHistory === '') {
      newHistory = [{
        equation: equation,
        output: output,
      }];
      localStorage.setItem('history', JSON.stringify(newHistory));
      setEquation('');
      setOutput(0);
      setHistory(newHistory);
      // setHistoryButtonState(true);
    } 
    //if yes
    else if (output !== 0 && equation !== '') {
      newHistory = JSON.parse(newHistory);
      newHistory.unshift({
        equation: equation,
        output: output,
      });
      localStorage.setItem('history', JSON.stringify(newHistory));
      setEquation('');
      setOutput(0);
      setHistory(newHistory);
    }
  };

  return (
    <div className="wrapper">
      <div className="row">
        <div className="column">
          <br></br><br></br>
          <div className="calculator">
            <Screen equation={equation} output={output} />
            <Keypad onButtonPress={onButtonPress} />
          </div>
        </div>
        <div className="column">
          <History history={history}  clearHistory={clearHistory} />
        </div>
      </div>
    </div>
  );
};
// historyButtonState={historyButtonState}
export default Calculator;
