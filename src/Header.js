import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'blue', padding: '10px', color: 'white' }}>
      <div style={{ float: 'left' }}>Logo</div>
      <div style={{ float: 'right' }}>
        <input type="text" placeholder="Search..." />
        <select>
          <option>History</option>
          <option>Archive</option>
        </select>
        <nav>
          <a href="#home" style={{ margin: '0 10px' }}>Home</a>
          <a href="#popular" style={{ margin: '0 10px' }}>Popular Articles</a>
          <a href="#latest" style={{ margin: '0 10px' }}>Last 24 Hours</a>
        </nav>
      </div>
      <div style={{ clear: 'both' }}></div>
    </header>
  );
}

export default Header;
