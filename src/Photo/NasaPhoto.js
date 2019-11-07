import React from "react";
import "../App.css";


function NasaPhoto(props)  {

    const photoOrVideo = (props) => {

        if(props.nasaData.media_type === "image"){
            return (<img className="nasaPhoto" src={props.nasaData.hdurl}></img>);

        } else {
            return (
                <video max-width="900">
                    <source src={props.nasaData.hdurl} type={props.nasaData.media_type} />
                    Your browser does not support HTML5 video.
                    </video>
            )
        }
    }

    if(!props.nasaData)
    {
        return <p>Loading...</p>;

    }
    else {
        return (

            <div className="photoCard">
    
                <p><span className="description">Name: </span>{props.nasaData.title}</p>
                {photoOrVideo(props)}
    
                <p><span className="description">Description: </span>{props.nasaData.explanation}</p>
    
    
            </div>
    
    
        );
    }
    


}
export default NasaPhoto;