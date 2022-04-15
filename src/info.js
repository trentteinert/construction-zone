import React, {useCallback} from "react";
import './info.css'
import {useNavigate} from 'react-router-dom'



function Info(){

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return(
    <div>
      <h2>Construction Zones</h2>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem incidunt fuga doloremque laboriosam, temporibus sit ad. Sequi illo necessitatibus magnam exercitationem nisi, laboriosam nemo porro adipisci eum ipsa earum sit omnis vero ratione dolores ea consequatur! Suscipit nisi omnis, voluptates placeat praesentium inventore voluptatum maxime veritatis esse cumque, perferendis consectetur! Amet impedit fuga exercitationem aspernatur vero omnis voluptas autem nostrum iste ea nulla illo odio sed, provident minus corporis cupiditate necessitatibus magni laborum unde sunt explicabo asperiores consectetur eveniet! Tempore?</h1>
      <button id='Button10' onClick={handleOnClick}>
      Home
      </button>
      <h4>Information</h4>
      <h5>Synopsis
      </h5>
    </div>
  )
}
// <a href="mainnav.html"><button onclick="enter()" class="button"><span>Enter</span></button></a>
export default Info;