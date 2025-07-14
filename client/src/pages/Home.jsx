// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: '20px 0',
      color: '#555',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '6px',
      transition: 'all 0.3s ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Welcome to Event Booking App</h1>
      <p style={styles.subtitle}>Plan, create, and manage your events effortlessly.</p>

      <div style={styles.buttonGroup}>
        <Link to="/register" style={{ ...styles.button, backgroundColor: '#4CAF50' }}>
          Register
        </Link>
        <Link to="/login" style={{ ...styles.button, backgroundColor: '#2196F3' }}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
