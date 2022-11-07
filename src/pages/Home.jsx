import React from 'react'
import Benefits from '../components/Benefits'
import BestAuthors from '../components/BestAuthors'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LastOrders from '../components/LastOrders'
import Navbar from '../components/Navbar'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import TrustHome from '../components/TrustHome'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Trusted />
      <Services />
      <Benefits />
      <BestAuthors />
      <Reviews />
      <LastOrders />
      <TrustHome />
      <Footer />
    </>
  )
}

export default Home