import React from 'react';
import logo from './logo.svg';
import image1 from './img/hulk-1.jpg';
import image2 from './img/venom-1.jpg';
import image3 from './img/venom-2.jpg';
import Header from './Component/Header';
import Imagecard from './Component/ImageCard';
import Searchinput from './Component/Searchinput';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
    
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        {/*Search input component*/}
      <Searchinput/>
      <div class="sample-wallpaper">
        <Imagecard uri={image1}/>
        <Imagecard uri={image2}/>
        <Imagecard uri={image3}/>
        
      </div>
      
      

    
      
      </div>
    </header>



    </div>
  
  );
}

export default App;
