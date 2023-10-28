import React from 'react';

function Categories() {
  const categories = ['Sports', 'Economy', 'Politics', 'Technology', 'Health', 'Entertainment'];

  return (
    <div style={{ float: 'left', width: '20%', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} style={{ margin: '5px 0' }}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
