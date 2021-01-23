import React, {useState} from 'react'
import Logo from '../../assets/images/logo.svg';
import './header.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../searchbar/searchbar';

function header({input, clearInput, handleInput, results}) {

  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img src={Logo} alt="google"/>
      </Link>
      <SearchBar
      input={input}
      handleInput={handleInput}
      clearInput={clearInput}
      results={results}
      />
    </div>
  )
}

export default header
