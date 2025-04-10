// src/Widget.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Widget = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Convert all query params to key-value pairs
  const allParams = Array.from(queryParams.entries());

  return (
    <div style={styles.widgetContainer}>
      <h2 style={styles.heading}>Received Parameters:</h2>
      
      {allParams.length > 0 ? (
        <ul style={styles.paramList}>
          {allParams.map(([key, value]) => (
            <li key={key} style={styles.paramItem}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noParams}>No query parameters provided.</p>
      )}

      <p style={styles.paragraph}>
        WE AID is a non-profit organisation and rely on donations and your support...
      </p>

      <p style={styles.thankYou}>
        Thanks for helping us building a sustainable platform by donating directly for WE AID.
      </p>

      <p style={styles.donateTitle}>Donate by Wire Transfer</p>

      <div style={styles.bankDetails}>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Account Holder: WE AID gGmbH</p>
        <p style={{ ...styles.bankLine, marginBottom: '12px' }}>IBAN: DE52370205000001838801</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>SWIFT/BIC: BFSWDE33XXX</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Use Keyword: WE AID</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Bank für Sozialwirtschaft Aktiengesellschaft, Konrad-Adenauer-Ufer 85, 50668 Köln, Germany</p>
        <p style={styles.bankLine}>Phone +49 (0) 221 97356-0</p>
      </div>
    </div>
  );
};

const styles = {
  widgetContainer: {
    padding: '20px',
    width: '100%',
    maxWidth: '700px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    height: '100vh',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#000',
    marginBottom: '10px',
  },
  paramList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  paramItem: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '6px',
  },
  noParams: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '20px',
  },
  paragraph: {
    color: 'rgb(117 117 117 / 1)',
    lineHeight: '16px',
    fontWeight: 300,
    fontSize: '14px',
  },
  thankYou: {
    color: 'rgb(0 145 217 / 1)',
    lineHeight: '25px',
    fontWeight: 400,
    fontSize: '20px',
    marginTop: '15px',
  },
  donateTitle: {
    color: 'rgb(0 0 0 / 1)',
    lineHeight: '25px',
    fontWeight: 500,
    fontSize: '19px',
    marginTop: '15px',
  },
  bankDetails: {
    marginTop: '15px',
  },
  bankLine: {
    color: 'rgb(117 117 117 / 1)',
    lineHeight: '24px',
    fontWeight: 300,
    fontSize: '14px',
    marginTop: '8px',
  },
};

export default Widget;
