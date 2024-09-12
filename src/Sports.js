
import React from "react";
import Health from "./Health";

function Sports({data}){
    return (
        <div>
        <div className='card-out'>
          {data.map((item, index) => (
            <div className='card'>
                
            <div key={index} className="business-item">
            <img src={item.og} alt="Image from the article" />
              <h2>{item.title}</h2>
              <p>Source: {item.source}</p>
              <img src={item.source_icon} alt={`${item.source} icon`} />
              <p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a>
              </p>
             
            </div>
            </div>
         
          ))}
        </div>
        </div>
      );
}
export default Sports;