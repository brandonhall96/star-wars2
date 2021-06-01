import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


const HomePage = (props) => {
    console.log(props)
    const myShipList = props.ships.map((shp, index) => {
        return (
        <div id='shipCards' className='ship' key={index}>
            <Link to={{pathname: '/starship'}}
            className="button"
                key={index} name={shp.name}
                id={shp.model}  
                onClick={(e) => props.select(e, index)} 
            />
            <p className="bCards">{shp.name}</p>
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