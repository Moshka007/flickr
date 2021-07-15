import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './pages/main/main'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App"> 
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
