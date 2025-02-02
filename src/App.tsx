import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome';
import Card from './components/card'


function App() {
  return (
    <>
      <div className='main'>
        <Header />
      </div>
      <Welcome/>
      <Card/>
    </>
  );
}

export default App;
