import React from 'react'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TermiteServices from './components/TermiteServices'
import WhyChooseUs from './components/WhyChooseUs'
import AMC from './components/AMC'
import AMCIndustries from './components/AMCIndustries'
import WorkProcess from './components/WorkProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import FloatingBugs from './components/FloatingBugs'

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white relative overflow-x-hidden">
      <FloatingBugs />
      <TopHeader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TermiteServices />
        <WhyChooseUs />
        <AMC />
        <AMCIndustries />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
