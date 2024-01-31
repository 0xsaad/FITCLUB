import React from 'react'
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Plans from './components/Plans/Plans.jsx';
import Testimonials from './components/Testimonals/Testimonial.jsx';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
       <Hero />
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <Join/>
       <Footer/>
    </div>
  )
}

export default App

