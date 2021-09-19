import React from 'react';
import Card from './Card';
import { data } from 'data';
const Main = () => {
  return (
    <div className="main-content-area">
      <div className="row">
        <h1 className="main-title">What are you Having for Lunch?</h1>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            hic blanditiis ratione quod optio officia!
          </p>
        </div>
      </div>
      <div className="container">
        {data.map(({ id, img, label }) => (
          <Card key={id} img={img} label={label} />
        ))}
      </div>
      <div className="row">
        <div className="para-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            hic blanditiis ratione quod optio officia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
