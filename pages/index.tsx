import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Achievements from '../components/Achievements';
import Courses from '../components/Courses'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Achievements />
      <Courses />
    </div>
  )
}

export default Home
