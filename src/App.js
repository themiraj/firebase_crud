import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from '../src/Components/Contacts';

function App() {
  return (
    <div className="row">
        <div className="col-md-8 offset-md-1">
          <Contact />
        </div> 
    </div>
  );
}

export default App;
