// import logo from './logo.svg';
// ASK: uwazaj na literowki z podpowiedzi
// import { Component } from 'react';

import './App.css';
import Naglowek from './components/Naglowek';
// ODP: sam dodal po exporcie i wybraniu z podpowiedzi
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="NaglowekH2">React counter  </h2>  
        {/* <Naglowek/> */}
        {/* <Naglowek napis="Moj naglowek z wywolania komponentu" classValue='red' /> */}
        <Naglowek napis="Moj naglowek z wywolania komponentu" classValue='blue' />


      </header>
        <Counter intValueCounter={5}/>
        <Counter intValueCounter={15}/>
        {/* ASK : w trzecim nie ustawia bo nie ma initvalueCounter przekazanego a jego wypisuje */}
        {/* <Counter text='ola boga' b={3+2}/> */}
    </div>
  );
}

export default App;
