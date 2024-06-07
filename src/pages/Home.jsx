import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Destinations from '../components/Destinations'

function Home() {

  return (
    <div>
      <NavBar/>
      <main>
          <Main/>
          <div>
          <Destinations/>
          </div>
          
      </main>
      <Footer/>
    </div>
  )
}

export default Home
