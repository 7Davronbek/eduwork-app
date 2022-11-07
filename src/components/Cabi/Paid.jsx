import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CabinetLayout from './CabinetLayout'

const Paid = () => {
    return (
        <>
            <Navbar />
            <CabinetLayout>
                <div className='Paid'>
                    <div className="paid_body_box">
                        <div className="paid_body_name">Справочник Студворк </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Справочник  </div>
                        </div>
                    </div>
                </div>
            </CabinetLayout>
            <Footer />
        </>
    )
}

export default Paid