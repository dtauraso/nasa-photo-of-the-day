import React, {useState} from "react";
import "./App.css";


function NasaPhoto(props) {




    return (

        // flex this to middle of page
        <div className="photoCard">

            {/* data from pops goes in this image */}
            <img className="nasaPhoto" src={props.url}></img>



        </div>


    );


}
export default NasaPhoto;