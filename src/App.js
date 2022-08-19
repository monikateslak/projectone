import React from 'react'
//import logo from './logo.svg'
import './App.css'
import MainSection from './MainSection'
import Nav from './Nav'
import Images from './Images'
//import ListProducts from './App.test'
//import Square from './HelloMessage'

function App() {
  return (
    <div>
      <Nav></Nav>
      <Images></Images>
      <img src="./images/IMG_2911.JPEG" alt="zielona hala"></img>
      {/*<ListProducts></ListProducts>*/}
      <div className="App">
        <header className="App-header">
          <h1> Rura App</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Gallery !!! Add You Photos
          </a>
          <MainSection></MainSection>
          <main>
            <div className="wrapper">
              <p>Fast Start</p>
            </div>
          </main>
        </header>
      </div>
    </div>
  )
}

export default App
