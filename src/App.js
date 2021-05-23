import { useEffect, useState } from 'react';
import './App.css';
import { Card, Grid } from 'semantic-ui-react'

function App() {
  const [ state, setState ] = useState ({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  // useEffect calls its effect function an initial load
  // we want our data when the apps leads
  useEffect(() => {
    async function getAndSetAppData() {
      const data = await fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
        setState(data)
    }
    getAndSetAppData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      {
        state.results.map((starship) => <h2>{starship.name}</h2>)
      }
    </div>
  );
}

export default App;
