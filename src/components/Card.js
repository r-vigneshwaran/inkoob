import React from 'react';

const Card = ({ img, label }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} alt={label} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default Card;
