import React from 'react';
import Welcome from './components/Welcome';
import Description from './components/Description';
import Pictures from './components/Pictures';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <Welcome/>
      </header>
      
     <Description/>
     <Pictures/>
     <Contact/>
    </div>
    <footer>
      <Footer/>
    </footer>
    </React.Fragment>
  );
}

export default App;
