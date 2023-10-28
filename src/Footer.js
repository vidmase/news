import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>
      <p>© 2023 RSS News Aggregator. All rights reserved.</p>
      <p>
        <a href="#terms" style={{ color: 'white', margin: '0 10px' }}>Terms of Use</a>
        <a href="#privacy" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</a>
      </p>
      <p>
        <a href="#facebook" style={{ color: 'white', margin: '0 5px' }}>Facebook</a>
        <a href="#twitter" style={{ color: 'white', margin: '0 5px' }}>Twitter</a>
        <a href="#instagram" style={{ color: 'white', margin: '0 5px' }}>Instagram</a>
      </p>
    </footer>
  );
}

export default Footer;
