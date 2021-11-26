import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div id="about">
      <h1>About Astroweb</h1>
      <p>
        djbfjsanfjaskndfashndfkjsdas
      </p>
      <button onClick={() => navigate('/contact')}>Contact us Now</button>
    </div>
  )
}

export default About
