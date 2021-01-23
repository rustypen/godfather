import React, {useState, useEffect} from 'react'
import qs from 'querystring';
import SearchBar from '../components/searchbar/searchbar';
import Results from '../components/results/results';
import SearchResults from '../response';
import Header from '../components/header/header';
import './search.scss';

function search({ location }) {
  
  const search = qs.parse(location.search.substring(1));
  const [input, setInput] = useState(search.query);
  const [response, setResponse] = useState(SearchResults.getAutosuggestions(input));

  const handleInput = (e)=>{
    const value = e.target.value;
    setResponse(SearchResults.getAutosuggestions(value));
    setInput(value);
  }

  const clearInput =()=>{
    setInput("");
  }


  const fullResults = SearchResults.getResults(search.query);

  return (
    <div className="search__page">
      <Header
      input={input}
      handleInput={handleInput}
      clearInput={clearInput}
      results={response}
      />
      <Results results={fullResults} />
    </div>
  );
}

export default search;
