import React, { useState } from 'react';
import './about.scss';

function about({data}) {

  const [sliderValue, setSliderValue] = useState(2)

  const changeSliderValue = (e)=>{
    const value = e.target.value;
    setSliderValue(value);
  }

  const biographyFont = `calc(${sliderValue}px + 1rem)`;

  return (
    <div>
      <div className="user">
        <h2 className="user__name">
          {data.name}
        </h2>
        <div className="user__popularity">
          <div className="user__popularity__text">
            Popularity 
          </div>
          <div className="slider">
            <input type="range" min="0" max="10" value={sliderValue} step="1" onChange={changeSliderValue}/>
          </div>
        </div>
        <div className="user__about">
          <div className="user__about__title">
            Biography
          </div>
          <p className="user__about__text" style={{fontSize:biographyFont}}>
            {data.biography}
          </p>
        </div>
      </div>
    </div>
  )
}

export default about
