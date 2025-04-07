// src/Widget.js
import React, { useState } from 'react';

const Widget = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello from the widget!');
  };

  return (
    <div style={styles.widgetContainer}>
      <button onClick={handleClick} style={styles.button}>Click</button>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  widgetContainer: {
    padding: '10px',
    border: '1px solid #ccc',
    width: '200px',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Widget;
