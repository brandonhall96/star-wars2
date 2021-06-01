import { Component } from "react";


const Starship = (props) => {
    console.log(props)
    let selectedShip = props.selectedShip
    return(
        <div>
            <div>
               <h2>Name: {selectedShip.name}</h2>

            </div>
        </div>
    )
}

export default Starship;