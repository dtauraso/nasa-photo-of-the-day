import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios";
import "./App.css";


function App() {
  const [nasaData, setNasaData] = useState("")
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=YuVkqo0dfl7mAUhCtvNt1D9HtPlGSVumVw64XpEt")
          .then(response => {
            // console.log(response.data)
            setNasaData(response.data)
          })
  
  }, [])
  const isImage = (nasaData) => {
    if(nasaData.media_type === "image") {
      // the jsx tags are data so we can return them from a function
      return <NasaPhoto nasaData={nasaData}/>;
    } else {
      // console.log()
      return <p>The image may be a video</p>
    }
  }
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* data from the api call would be passed to NasaPhoto */}
      { isImage(nasaData)}
    </div>
  );
}

export default App;
