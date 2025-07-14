import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/register" style={styles.link}>Register</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    gap: '15px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Navbar;
