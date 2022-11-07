import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SerHead from '../components/SerHead'
import SerOrder from '../components/SerOrder'
import SerProcess from '../components/SerProcess'
import SerWorks from '../components/SerWorks'
import TrustHome from '../components/TrustHome'

const Servic = () => {
    return (
        <>
            <Navbar />
            <SerHead />
            <SerWorks />
            <SerProcess />
            <SerOrder />
            <TrustHome />
            <Footer />
        </>
    )
}

export default Servic