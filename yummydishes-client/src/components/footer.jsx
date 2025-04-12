import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} YummyDishes. All rights reserved.</p>
    </footer>
  );
}; 

const styles = {
    footer: {
        backgroundColor: '#f8f8f8',
        padding: '0 0',
        textAlign: 'center',
        marginTop: 'auto',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // horizontal center (optional since textAlign is also used)
    },
    text: {
        color: '#555',
        fontSize: '20px',
        margin: 0,
    },
};

export default Footer;
