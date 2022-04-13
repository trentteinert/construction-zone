import React, {useCallback} from "react";
import './inside.css'
import {useNavigate} from 'react-router-dom'

function Inside(){

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const handleOnClick2 = useCallback(() => navigate('/model001', {replace: true}), [navigate]);

  return(
    <div>
      <button id='Button5' onClick={handleOnClick}>
      Back
      </button>
      <button id='Button6' onClick={handleOnClick2}>
      Model View
      </button>
      <p align="center"> <iframe id='Bigmap' title='map2' src="https://my.atlistmaps.com/map/e4d28ab0-e933-45c4-a670-3fbbba42913b?share=true" 
        allow="geolocation" 
        frameborder="0"
        scrolling="no" 
        allowfullscreen></iframe></p>
    </div>
  )
}

// <a href="mainnav.html"><button onclick="enter()" class="button"><span>Enter</span></button></a>
export default Inside;