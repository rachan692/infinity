import Associate from '@/Home/Associate'
import Bhutan from '@/Home/Bhutan'
import Card from '@/Home/Card'
import Choose from '@/Home/Choose'
import Course from '@/Home/Course'
import Family from '@/Home/Family'
import Footer from '@/Home/Footer'
import Guide from '@/Home/Guide'
import Hero from '@/Home/Hero'
import Mountain from '@/Home/Mountain'
import Nav from '@/Home/Nav'
import Partner from '@/Home/Partner'
import Query from '@/Home/Query'
import Schooling from '@/Home/Schooling'
import Sell from '@/Home/Sell'
import Static from '@/Home/Static'
import Testimonials from '@/Home/Testimonials'
import Trek from '@/Home/Trek'
import React from 'react'

const Home = () => {
  return (
    <div>
         <Nav/>
         <Card/>
         <Associate/>
         <Sell/>
         <Mountain/>
         <Trek/>
        <Course/>
        <Guide/>
        <Choose/>
        <Static/>
        <Bhutan/>
        <Schooling/>
        <Family/>
        <Hero/>
        <Query/>
        <Testimonials/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default Home