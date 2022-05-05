import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import MainSection from './MainSection'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<MainSection />} />
            <Route path="/nav" element={<Nav />}></Route>
          </Routes>

          <div className="App">
            <header className="App-header">
              <h1>Pole Dance Camp</h1>

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                RuraApp
              </a>
              <MainSection></MainSection>
            </header>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App
