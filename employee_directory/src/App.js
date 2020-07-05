import React from 'react';
import './App.css';

//components
import Edirectory from './components/Edirectory'
import Inpsearch from './components/Inpsearch'
import Grid from './components/Grid'

function App() {
  return (
    <div>
        <Edirectory/>
        <br/>
        <Inpsearch/>
        <br/>
        <Grid/>
    </div>
  );
}

export default App;
