
import React from 'react';
import './App.css';
import Inside from  './inside'
import Upload from './upload';
import Model001page from './model001';
import Model1home from './model1home';
import Model002page from './model002';
import Model003page from './model003';
import Model004page from './model004';
import Model005page from './model005';
import Model006page from './model006';
import Model007page from './model007';
import Model008page from './model008';
import Model009page from './model009';
import Model010page from './model010';
import Model011page from './model011';
import Model012page from './model012';
import Model013page from './model013';
import Model014page from './model014';
import Model015page from './model015';
import Model016page from './model016';
import Model017page from './model017';
import Model018page from './model018';
import Model019page from './model019';
import Model020page from './model020';
import Info from './info';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Routes><Route path="/inside" element={<Inside />}/></Routes>
      <Routes><Route path='/model001' element={<Model001page />}/></Routes>
      <Routes><Route path='/' element={<Model1home />}/></Routes>
      <Routes><Route path='/model002' element={<Model002page />}/></Routes>
      <Routes><Route path='/model003' element={<Model003page />}/></Routes>
      <Routes><Route path='/model004' element={<Model004page />}/></Routes>
      <Routes><Route path='/model005' element={<Model005page />}/></Routes>
      <Routes><Route path='/model006' element={<Model006page />}/></Routes>
      <Routes><Route path='/model007' element={<Model007page />}/></Routes>
      <Routes><Route path='/model008' element={<Model008page />}/></Routes>
      <Routes><Route path='/model009' element={<Model009page />}/></Routes>
      <Routes><Route path='/model010' element={<Model010page />}/></Routes>
      <Routes><Route path='/model011' element={<Model011page />}/></Routes>
      <Routes><Route path='/model012' element={<Model012page />}/></Routes>
      <Routes><Route path='/model013' element={<Model013page />}/></Routes>
      <Routes><Route path='/model014' element={<Model014page />}/></Routes>
      <Routes><Route path='/model015' element={<Model015page />}/></Routes>
      <Routes><Route path='/model016' element={<Model016page />}/></Routes>
      <Routes><Route path='/model017' element={<Model017page />}/></Routes>
      <Routes><Route path='/model018' element={<Model018page />}/></Routes>
      <Routes><Route path='/model019' element={<Model019page />}/></Routes>
      <Routes><Route path='/model020' element={<Model020page />}/></Routes>
      <Routes><Route path='/upload' element={<Upload />}/></Routes>
      <Routes><Route path='/information' element={<Info />}/></Routes>
    </div>
  );
}

export default App;
