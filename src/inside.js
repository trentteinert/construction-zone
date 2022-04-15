import React, {useCallback} from "react";
import './inside.css'
import {useNavigate} from 'react-router-dom'

function Inside(){

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  
  return(
    <div>
      <p align="center"> <iframe id='Bigmap' title='map2' src="https://my.atlistmaps.com/map/e4d28ab0-e933-45c4-a670-3fbbba42913b?share=true" 
        allow="geolocation" 
        frameborder="0"
        scrolling="no" 
        allowfullscreen></iframe></p>
      <button id='Button5' onClick={handleOnClick}>
      Back
      </button>
    </div>
  )
}

// <a href="mainnav.html"><button onclick="enter()" class="button"><span>Enter</span></button></a>
export default Inside;