import React from 'react';
import './App.css';
import Header from './Header';
import Categories from './Categories';
import NewsFeed from './NewsFeed';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ overflow: 'hidden', padding: '20px' }}>
        <Categories />
        <NewsFeed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
