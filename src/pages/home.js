import React, {useState} from 'react'
import SearchBar from '../components/searchbar/searchbar';
import Logo from '../assets/images/logo.svg'
import SearchResults from '../response';
import './home.scss';

function home() {
  
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleInput = (e)=>{
    const value = e.target.value;
    setResponse(SearchResults.getAutosuggestions(value));
    setInput(value);
  }

  const clearInput =()=>{
    setInput("");
  }

  return (
    <div className="home">
      <div className="home__logo">
        <img src={Logo} alt="google" />
      </div>
      <SearchBar
      input={input}
      handleInput={handleInput}
      clearInput={clearInput}
      results={response}
      />
    </div>
  )
}

export default home
