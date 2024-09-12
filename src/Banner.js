import React from 'react';
import './banner/banner.css'; // Ensure this path matches where your CSS is located

function Banner({ data }) {
  return (
    <div className="banner">
      <h1>Top 10 News</h1>
      
      <div className="card-container">
        {data.slice(0, 10).map((item, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <img src={item.og} alt="Image from the article" className="card-image" />
              <div className="card-text">
                <h2>{item.title}</h2>
                <p>Source: {item.source}</p>
                <img src={item.source_icon} alt={`${item.source} icon`} className="source-icon" />
                <p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Banner;
