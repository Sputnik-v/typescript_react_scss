import  React from 'react';
import Header from "./header/Header";
import style from '../styles/style.scss';



const App = () => {

  return (
    <div className={style}>
      <h1>Bundle</h1>
      <Header>
        <p className="kilt">React Node</p>
      </Header>
    </div>
  )
}

export default App;