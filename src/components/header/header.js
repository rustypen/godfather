import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './header.scss';

function header() {
  const [data, setData] = useState(null);

  const fetcher = async ()=>{
    const response = await fetch('/api',{
      method: 'POST',
      body: JSON.stringify({
        action: "users"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response);
    const json = await response.json();
    setData(json);
  }
  
  useEffect(() => {
    fetcher();
  }, [])

  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src="/images/logo/the-godfather.svg" />    
      </Link>
      <nav className="navbar">
        {
          data && data.map((item, index)=><Fragment key={index}>
            <Link className="navbar__link" to={`/${item.name}`} style={{fontSize: `calc(${item.popularity*3}px + 1rem)`}}>
              {item.name}
            </Link>
          </Fragment>)
        }
      </nav>
    </header>
  )
}

export default header
