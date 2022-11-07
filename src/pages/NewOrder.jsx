import React from 'react'
import Advantages from '../components/Advantages'
import Example from '../components/Example'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OrderHead from '../components/OrderHead'
import OrderQuestion from '../components/OrderQuestion'
import OrderWhy from '../components/OrderWhy'
import Reviews from '../components/Reviews'
import SerProcess from '../components/SerProcess'
import TrustHome from '../components/TrustHome'

const NewOrder = () => {
    return (
        <>
            <Navbar />
            <OrderHead />
            <Example />
            <Reviews />
            <Advantages />
            <SerProcess />
            <OrderWhy />
            <OrderQuestion />
            <TrustHome />
            <Footer />
        </>
    )
}

export default NewOrder