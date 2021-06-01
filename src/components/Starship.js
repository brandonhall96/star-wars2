import { Component } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const Starship = (props) => {
    console.log(props)
    
    let selectedShip = props.selectedShip
    console.log(selectedShip)
    return(
        <div>
            <div>
               <h2>Name: {selectedShip.name}</h2>
               <h2>Model: {selectedShip.model}</h2>
               <h2>Manufacturer: {selectedShip.manufacturer}</h2>

            </div>
            <Link to = {{pathname: '/' }} >
                Return to Home
            </Link>

        </div>
    )
}

export default Starship;