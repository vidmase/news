import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';

function NewsFeed() {
  const [loading, setLoading] = useState(true);
  const [newsItems, setNewsItems] = useState([
    { id: 1, title: 'News Item 1', timestamp: '10 mins ago' },
    { id: 2, title: 'News Item 2', timestamp: '20 mins ago' },
    // Add more news items as needed
  ]);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <BounceLoader color={'#0000ff'} loading={loading} size={150} />;
  }

  return (
    <div className="NewsFeed" style={{ float: 'right', width: '75%', padding: '10px' }}>
      <h3>News Feed</h3>
      {newsItems.map((news) => (
        <div key={news.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
          <h4><a href={`#news-${news.id}`}>{news.title}</a></h4>
          <p>{news.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
