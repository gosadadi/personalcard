
import { Component } from 'react';
import './App.css';
import PersonCard from './components/personalCard';
function App() {
  
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
