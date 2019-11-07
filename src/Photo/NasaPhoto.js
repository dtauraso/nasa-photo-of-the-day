import React, {useState} from "react";
import "../App.css";


function NasaPhoto(props)  {

    // console.log(props)
    // console.log(Object.keys(props.nasaData))
    // const isImage = (nasaData) => {
    //     if (!nasaData) {
    //         return <h3>Loading...</h3>;
    
    //     } else {
          
    //       if(nasaData.media_type === "image") {
    
    //         // the html-like tags are data so we can return them from a function
    //         return <NasaPhoto nasaData={nasaData} />;
    
    //       } else {
    
    //         return <p>The image may be a video</p>
    //       }
    //     }
       
    //   }
    if(!props.nasaData)
    {
        return <p>Loading...</p>;

    }
    else {
        return (

            // flex this to middle of page
            <div className="photoCard">
    
                {/* data from pops goes in this image */}
                <p><span className="description">Name: </span>{props.nasaData.title}</p>
                <img className="nasaPhoto" src={props.nasaData.hdurl}></img>
    
                <p><span className="description">Description: </span>{props.nasaData.explanation}</p>
    
    
            </div>
    
    
        );
    }
    


}
export default NasaPhoto;