import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';



const HomePage = (props) => {
  console.log(props)
  const myShipList = props.ships.map((shp, index) => {
    return (
    <div key={index} className='starship-div'>
      <Link 
        to={{pathname: '/starship'}}
        key={index} name={shp.name}
        id={shp.model}  
        value={shp.manufacturer}
        onClick={(e) => props.select(e, index)} 
      >
        {shp.name}
      </Link>
    </div>
    )
  })
  return(
    <div className="container">
      {myShipList}
    </div>
  )
}
export default HomePage;