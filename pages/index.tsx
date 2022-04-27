import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default Home
