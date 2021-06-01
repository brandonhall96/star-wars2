// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import Starship from './components/Starship';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const App = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    let allShips = [];
    for(let i = 1; i <= 4; i++) {
      let url = `https://swapi.dev/api/starships/?page=${i}`
      await axios.get(url)
      .then(res => {
        let starships = res.data.results;
        allShips.push(...starships);
        setShips(allShips);
      })
    }
    setIsLoaded(true);
  }, [])

  const select = (e, index) => {
    console.log('clicked', e.target);
    setSelectedShip([])
  setSelectedShip({ name: e.target.name, model: e.target.id, manufacturer: e.target.value });
  };

  if (isLoaded === false) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  } else {
    return(
      <div>
            <Router>
      <Route exact path='/'>
        <HomePage ships={ships} select={select}/>
      </Route>
      
      <Route path='/starship' render={(props) => <Starship {...props} selectedShip= {selectedShip} />}/>
      </Router>
      </div>
        
        
    )
}
}


export default App;
