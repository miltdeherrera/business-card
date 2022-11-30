import React from 'react'
import Social from './components/Social'
import Interests from './components/Interests'
import About from './components/About'
import Info from './components/Info'
import Contact from './components/Contact'

export default function App () {
    return (
        <div className="container">
            <Info />
            <div className="textSection">
                <Contact />
                <About />
                <Interests />            
            </div>
            <Social />
        </div>
    )
}