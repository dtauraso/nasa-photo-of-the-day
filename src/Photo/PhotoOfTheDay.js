import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios"
import "../App.css"

function PhotoOfTheDay() {

    const [nasaData, setNasaData] = useState()
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=YuVkqo0dfl7mAUhCtvNt1D9HtPlGSVumVw64XpEt")
              .then(response => {
                console.log(response.data)
                setNasaData(response.data)

              })
              .catch(error => {
                console.log("error =>", error.message)

              })
      // putting nasaData here actually resulted in alot of network calls so I had to take it out
      }, [])


    //   const isImage = (nasaData) => {
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
    
    // console.log("here",nasaData.date)
    return (<NasaPhoto nasaData={nasaData} />);
    // return (<NasaPhoto nasaData={nasaData}/>);

}

export default PhotoOfTheDay;