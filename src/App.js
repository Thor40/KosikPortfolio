import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navigator from './components/Navbar'

function App() {

  useEffect(() => {
    document.title = "Nicholas Kosik";
  }, []);

  return (
    <div className="App">
      <Navigator></Navigator>
      <Header></Header>
      
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}


export default App;
