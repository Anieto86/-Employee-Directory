import React from 'react';
import './App.css';

//components
import Edirectory from './components/Edirectory'
import Inpsearch from './components/Inpsearch'
import Emplo from './components/Emplo'

//Posts API froms  https://randomuser.me/ RANDOM USER GENERATOR
 
// import Posts from './components/utils/Post'

function App() {
  return (
    <div>
        <Edirectory/>
        <br/>
        <Inpsearch/>
        <br/>
        <Emplo/>
    </div>
  );
}

export default App;
