import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faTimes } from '@fortawesome/free-solid-svg-icons'
import './suggestions.scss';

function suggestions({results}) {

  return (
    Array.isArray(results) && results.length > 0 && 
    <ul className="suggestion">{
      results.map((result, index)=><Fragment key={'suggestion'+index}>
        <li className="suggestion__item">
          <Link to={`/search?query=${result.title}`} className="suggestion__item__link">
            <span className="suggestion__item__icons">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className="suggestion__item__title" dangerouslySetInnerHTML={{__html:result.suggestion}}>
              {/* {result.title} */}
            </span>
          </Link>
        </li>
      </Fragment>)
    }</ul>
  )
}

export default suggestions;
