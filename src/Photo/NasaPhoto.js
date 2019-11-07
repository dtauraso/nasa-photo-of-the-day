import React, {useState} from "react";
import "../App.css";


function NasaPhoto(props)  {

    if(!props.nasaData)
    {
        return <p>Loading...</p>;

    }
    else {
        return (

            <div className="photoCard">
    
                <p><span className="description">Name: </span>{props.nasaData.title}</p>
                <img className="nasaPhoto" src={props.nasaData.hdurl}></img>
    
                <p><span className="description">Description: </span>{props.nasaData.explanation}</p>
    
    
            </div>
    
    
        );
    }
    


}
export default NasaPhoto;