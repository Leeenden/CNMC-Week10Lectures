import { useState, useEffect } from "react";
import { Header } from "./components.js/header";
import { Bio } from "./components.js/bio"
import { SignForm, LogForm } from "./components.js/signLog";
import { Footer } from "./components.js/footer";
import { fetchImages } from "./utils.js";

import './App.css';


const App = () => {
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, [])
  
  return (
    <div className="App">
      <div className="hero">
        <Header title={user} />
        <Bio title={user} />
        {!user && <SignForm setUser = {setUser}/>}
        {!user && <LogForm setUser = {setUser}/>}
        <div className="imageContainer">
          {images.map((image, i) => {
            return (
              <img className="images" 
                src={image.download_url} 
                alt={`random file from unsplash number ${i}`}
              />
            );
          })}
        </div>
        {/* <img src ="https://picsum.photos/200/300" alt ="Lorem picsum random picture"/> */}
        <Footer/>
      </div>
    </div>
  );
};

export default App;
