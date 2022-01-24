import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import NameList  from './components/NameList';
import HeaderBar from './components/HeaderBar/headerbar';
import Home from './components/Pages/Home';
import AboutUs from'./components/Pages/AboutUs';


function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderBar>

          </HeaderBar>

          <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/namelist' element={<NameList />} />

          
          
          


          </Routes>  
      
          
      </BrowserRouter>
    </div>
    
  );
}

export default App;
