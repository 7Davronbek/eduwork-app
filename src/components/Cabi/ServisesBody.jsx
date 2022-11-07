import React from 'react'
import { Link } from 'react-router-dom'
import CabinetLayout from './CabinetLayout'

const ServisesBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="ServisesBody">
                    <div className="servises_body_box">
                        <div className="servises_body_name">Баланс  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Баланс</div>
                        </div>

                        <div className="row servises_main_box">
                            <div className="col-4">
                                <div className="servises_body_main">
                                    <img src="/img/servises_main_1.svg" alt="" className="servises_main_img" />
                                    <div className="servises_main_h">PRO-аккаунт</div>
                                    <div className="servises_main_p">Единая услуга с массой преимуществ как для авторов, так и для заказчиков</div>
                                    <Link to='/SalPro' className="servises_main_a">Купить</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="servises_body_main">
                                    <img src="/img/servises_main_2.svg" alt="" className="servises_main_img" />
                                    <div className="servises_main_h">Автовывод средств</div>
                                    <div className="servises_main_p">Моментальное получение заработанных средств</div>
                                    <Link to='/SalPro' className="servises_main_a">Купить</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="servises_body_main">
                                    <img src="/img/servises_main_3.svg" alt="" className="servises_main_img" />
                                    <div className="servises_main_h">Скрытые предложения</div>
                                    <div className="servises_main_p">Ваши предложения, оставленные к заказу, не видны другим экспертам с PRO статусом</div>
                                    <Link to='/SalPro' className="servises_main_a">Купить</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CabinetLayout>

        </>
    )
}

export default ServisesBody