import React, {useState} from "react";
import "./App.css";


function NasaPhoto(props) {

    console.log(props)


    return (

        // flex this to middle of page
        <div className="photoCard">

            {/* data from pops goes in this image */}
            <img className="nasaPhoto" src={props.nasaData.hdurl}></img>

            <p><span className="description">Description: </span>{props.nasaData.explanation}</p>


        </div>


    );


}
export default NasaPhoto;