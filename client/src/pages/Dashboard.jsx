// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setMessage('Unauthorized. No token provided.');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/protected/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
        setUser(res.data.user);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Something went wrong');
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <p>{message}</p>
      {user && (
        <div>
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '40px auto',
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#e8f0fe',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }
};

export default Dashboard;
