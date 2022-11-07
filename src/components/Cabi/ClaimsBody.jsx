import React from 'react'
import CabinetLayout from './CabinetLayout'

const ClaimsBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="ClaimsBody">
                    <div className="claims_body_box">
                        <div className="claims_body_name">Претензии  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Претензии</div>
                        </div>

                        <div className="row">
                            <div className="col-9">
                                <input placeholder='Пользователь' type="text" className="claims_body_inp" />
                            </div>
                            <div className="col-9">
                                <input placeholder='Текст ' type="text" className="claims_body_inp" />
                            </div>
                            <div className="claims_body_btn"><button>Oтправить </button></div>
                        </div>
                    </div>


                </div>
            </CabinetLayout>
        </>
    )
}

export default ClaimsBody