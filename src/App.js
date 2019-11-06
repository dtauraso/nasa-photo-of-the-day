import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios";
import "./App.css";


function App() {
  const [photoAddress, setPhotoAddress] = useState("")
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then(response => {
            console.log(response.data.hdurl)
            setPhotoAddress(response.data.hdurl)
          })
  
  }, [photoAddress])
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* data from the api call would be passed to NasaPhoto */}
      <NasaPhoto url={photoAddress}/>
    </div>
  );
}

export default App;
