import React from 'react';
import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Main/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
