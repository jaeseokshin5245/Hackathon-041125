import React from 'react';
import logo from '../assets/logo.svg'; // make sure your SVG is placed in src/assets/

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#menu" style={styles.link}>Ingredients</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    height: '89px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
};

export default Header;
