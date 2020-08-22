import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from '../src/Components/Contacts';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-12">
            <Contact />
          </div> 
      </div>
    </div>
  );
}

export default App;
