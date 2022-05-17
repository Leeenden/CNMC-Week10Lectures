import { useState, useEffect } from "react";
import { Header } from "./components.js/header";
import { SignLogForm } from "./components.js/header";
import { Footer } from "./components.js/footer";
import { fetchImages } from "./utils.js";

import './App.css';


const App = () => {
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, [])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   setTitle(userInput);
  // }
  return (
    <div className="App">
      <div className="hero">
        <Header title={user} />
        <SignLogForm setUser = {setUser}/>
        <div className="imageContainer">
          {images.map((image, i) => {
            return (
              <img src={image.download_url} alt={`random file from unsplash number ${i}`}/>
            )
          })}
        </div>
        {/* <img src ="https://picsum.photos/200/300" alt ="Lorem picsum random picture"/> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
