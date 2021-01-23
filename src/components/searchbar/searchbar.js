import React, { useState } from 'react'
import Suggestions from './suggestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faTimes } from '@fortawesome/free-solid-svg-icons'
import './searchbar.scss';

function home({input, clearInput, handleInput, results}) {

  return (
    <label className="searchbar" htmlFor="search">
      <div className="searchbar__container">
        <span className="searchbar__icons searchbar__input__icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input type="text" className="searchbar__input" id="search" onChange={handleInput} value={input} autoComplete="off"/>
        {
          input && <button className="searchbar__icons searchbar__clear__icon" onClick={clearInput}>
            <FontAwesomeIcon icon={faTimes} />
          </button> 
        }
      </div>
      {
        Array.isArray(results) && <Suggestions results={results}/>
      }
    </label>
  )
}

export default home
