import React from 'react';
import '../../styles/history.css';

const HistoryPanel = ({ history, clearHistory, historyButtonState }) => {
  return (
    <div className="history-panel">
      <div className="history-heading">
        <h1>History</h1>

        {historyButtonState && (
          <button className="history-button" onClick={clearHistory}>
            Clear
          </button>
        )}
      </div>

      <div className="history-wrapper">
        <ul className="history-list">
          {history.map((el, index) => (
            <li className="list-item" key={index}>
              <div className="equation-item">{el.equation}</div>
              <div className="output-item"> = {el.output}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPanel;
