import React from "react";
import { render } from "react-dom";
import Main from './pages/main';
import './styles/style.scss'

function App() {
  return <>
    <div className="container">
      <Main/>
    </div>
  </>;
}

render(<App />, document.getElementById("root"));