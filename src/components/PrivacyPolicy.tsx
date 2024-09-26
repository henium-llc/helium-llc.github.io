import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => (
  <div style={styles.container}>
    <h1>Privacy Policy</h1>
    <p>
      Henium, LLC does not collect any user-identifying data or serve ads.
    </p>
    <Link to="/" style={styles.link}>
      Back to Home
    </Link>
  </div>
);

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    display: 'block',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#0066cc',
  },
};

export default PrivacyPolicy;