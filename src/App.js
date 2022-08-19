import React from 'react'
//import logo from './logo.svg'
import './App.css'
import Footer from './Components/Footer'
import MainSection from './Components/MainSection'
import Nav from './Components/Nav'
import Images from './Components/Images'
//import Square from './HelloMessage'

function App() {
  return (
    <div>
      <Nav></Nav>
<Images></Images>
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
