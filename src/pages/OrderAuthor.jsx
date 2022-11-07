import React from 'react'
import AuthorAdvantage from '../components/AuthorAdvantage'
import AuthorHead from '../components/AuthorHead'
import AuthorHow from '../components/AuthorHow'
import AuthorInfo from '../components/AuthorInfo'
import AuthorMay from '../components/AuthorMay'
import AuthorMoney from '../components/AuthorMoney'
import AuthorNum from '../components/AuthorNum'
import AuthorStats from '../components/AuthorStats'
import AuthorTerms from '../components/AuthorTerms'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Reviews from '../components/Reviews'

const OrderAuthor = () => {
    return (
        <>
            <Navbar />
            <AuthorHead />
            <AuthorNum />
            <AuthorInfo />
            <AuthorMay />
            <AuthorAdvantage />
            <AuthorStats />
            <AuthorHow />
            <AuthorMoney />
            <Reviews />
            <AuthorTerms />
            <Footer />
        </>
    )
}

export default OrderAuthor