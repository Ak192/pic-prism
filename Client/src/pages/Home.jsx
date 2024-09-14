import React from 'react'
import Hero from '../component/Hero'
import Card from '../component/Card'

const Home = () => {
  return (
    <div  className='h-[70vh] overflow-scroll'>
      <Hero />
      <div className='flex flex-wrap justify-center mt-4' >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />        <Card />
        <Card />        <Card />
        <Card />        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home