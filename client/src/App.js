
import './App.css';

import React from 'react';
import Home from './pages/Home';
import Footer from './components/sharedComponents/Footer/Footer';


function App() {
  return (
    <div className='p-0' style={{overflowX: 'hidden'}}>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
