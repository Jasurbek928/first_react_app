import React from 'react';
import Nav from './homePage/Nav';
import Categories from './homePage/Categories';
import  '../src/styles/style.scss';
import Home from './homePage/Home';
import SmartWatch from './recommended/SmartWatch';
import Ads from './ads/Ads';
import NewCollec from './newcollection/NewCollec';


function App() {
  return (
    
     <div className="App">
      <Nav/>
      <Categories/>
      <Home/>
      <SmartWatch/>
      <Ads/>
      <NewCollec/>
     
      
    </div>
   
  );
}

export default App;
