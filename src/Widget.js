// src/Widget.js
import React from 'react';

const Widget = () => {
  return (
    <div style={styles.widgetContainer}>
      
      <p style={styles.paragraph}>
        WE AID is a non-profit organisation and rely on donations and your support. No overhead, 100% impact: Initiative´s donations will not be used for WE AID as organisation, admin or project infrastructure as long as it is not directly earmarked by donors.
      </p>

      <p style={styles.thankYou}>
        Thanks for helping us building a sustainable platform by donating directly for WE AID.
      </p>

      <p style={styles.donateTitle}>
        Donate by Wire Transfer
      </p>

      <div style={styles.bankDetails}>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Account Holder: WE AID gGmbH</p>
        <p style={{ ...styles.bankLine, marginBottom: '12px' }}>IBAN: DE52370205000001838801</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>SWIFT/BIC: BFSWDE33XXX</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Use Keyword: WE AID</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Bank Details:</p>
        <p style={{ ...styles.bankLine, marginBottom: '6px' }}>Bank für Sozialwirtschaft Aktiengesellschaft,</p>
        <p style={styles.bankLine}>Konrad-Adenauer-Ufer 85, 50668 Köln, Germany</p>
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
