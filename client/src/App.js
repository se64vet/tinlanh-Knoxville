
import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Navbar, Footer } from "./components/sharedComponents";
import NewPost from './pages/NewPost';


function App() {
  return (
    <div className='p-0' style={{overflowX: 'hidden'}}>
      <Navbar/>
      {/* <Home /> */}

      <NewPost />

      <Footer />
    </div>
  );
}

export default App;
