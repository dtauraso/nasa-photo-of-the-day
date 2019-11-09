import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios"
import "../App.css"

function PhotoOfTheDay() {
    let  i = 0
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
      // putting nasaData results in an infinit change update fetch cycle inside useEffect
      }, [i])

    
    return (<NasaPhoto nasaData={nasaData} />);

}

export default PhotoOfTheDay;