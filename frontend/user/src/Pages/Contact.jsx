import React from 'react'
import Hero from '../Components/Contact/Hero'
import Forms from '../Components/Contact/Forms'
import Stats from '../Components/Contact/Stats'
import LuxuryMachine from '../Components/Contact/LuxuaryMachine'
import Tools from '../Components/Contact/Tools'

const Contact = () => {
  return (
    <div>
      <Hero />
      <Forms />
      <Tools/>
      <Stats />
      <LuxuryMachine/>
    </div>
  )
}

export default Contact