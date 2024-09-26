import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Henium, LLC</h1>
    <p style={styles.subtitle}>Coming Soon</p>
    <Link to="/privacy-policy" style={styles.link}>
      Privacy Policy
    </Link>
  </div>
);

const styles = {
  container: {
    textAlign: 'center' as const,
    marginTop: '20%',
  },
  title: {
    fontSize: '48px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#555',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#0066cc',
    fontSize: '18px',
  },
};

export default Home;