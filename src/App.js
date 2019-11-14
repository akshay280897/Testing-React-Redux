import React from 'react';
import Header from './components/header';
import './App.scss';

function App() {
  const temp = [{
     fName:'Akshay',
     lName:'Potdar',
     age:21
  }];
  return (
    <div className="App">
      <Header header="SimpleTut" desc="asch" temp={temp}/>
    </div>
  );
}

export default App;
