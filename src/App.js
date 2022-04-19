import React from 'react'
//import logo from './logo.svg'
import './App.css'
import Footer from './Footer'
import MainSection from './MainSection'
import Nav from './Nav'
//import Square from './HelloMessage'

function App() {
  return (
    <div>
      <Nav></Nav>

      <div className="App">
        <header className="App-header">
          <h1>Pole Dance Camp</h1>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rura App Download
          </a>
          <MainSection></MainSection>
        </header>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
