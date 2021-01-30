import React, {useEffect, useState} from 'react'
import About from '../components/about/about';
import './home.scss';
import {useParams} from 'react-router-dom'

function user() {

  let params = useParams();

  const [data, setData] = useState(null);

  const fetcher = async ()=>{
    const response = await fetch('/api',{
      method: 'POST',
      body: JSON.stringify({
        action: "user",
        username: params.username || "Vito Corleone",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetcher();
  }, [params.username])

  return (
    <div className="home">
      {
        data && <>
          <div className="image" key={"hell"}>
            <img src={`/images/Profile pics/${data.image}`} height="300" width="300" />
          </div>
          <About data={data}/>
        </>
      }
    </div>
  )
}

export default user
