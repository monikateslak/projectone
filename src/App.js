import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Components/Footer'
import MainSection from './MainSection'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>

function App() {
  return (
    <>
      <Router>
        <div>
          <Header></Header>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/main" element={<MainSection />} />
            <Route path="/nav" element={<Nav />}></Route>
            <Route path="/footertest" element={<Footer />}></Route>
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

export default App
