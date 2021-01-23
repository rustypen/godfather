import React, {Fragment} from 'react'
import {Link, useLocation} from 'react-router-dom';
import './results.scss';

function results({results}) {

  return (<div className="results">
    {
      Array.isArray(results) && 
      results.map((result, index)=><Fragment key={index+result.link}>
        <div className="results__item">
          <a href={result.link} className="results__item__link">
            <span className="results__item__title">
              {result.title}
            </span>
          </a>
          <div className="results__item__description">
            {result.description}
          </div>
        </div>
      </Fragment>)
    }
    </div>
  )
}

export default results
