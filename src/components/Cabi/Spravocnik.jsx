import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CabinetLayout from './CabinetLayout'

const Spravocnik = () => {
    return (
        <>
            <Navbar />
            <CabinetLayout>
                
                <div className='Spravocnik'>
                    
                        <div className="shop_body_box">
                            <div className="shop_body_name">Магазин готовых работ</div>
                            <div className='d-flex align-items-center'>
                                <a href='' className="ord_head_a_1">Главная </a>
                                <div className="ord_head_a_2">Магазин готовых работ  </div>
                            </div>
                            <input placeholder='Поиск по ключевым словам' type="text" className="shop_body_inp" />
                            <div className="shop_body_inp_box">
                                <select className='shop_body_inp_box_sel me-4'>
                                    <option value="">Все типы работ</option>
                                    <option value="">Задача</option>
                                    <option value="">Контрольная работа</option>
                                    <option value="">Курсовая работа</option>
                                    <option value="">Дипломная работа</option>
                                </select>
                                <select className='shop_body_inp_box_sel me-4'>
                                    <option value="">Все предметы</option>
                                    <option value="">Алгебра</option>
                                    <option value="">Аналитическая геометрия</option>
                                    <option value="">Вычислительная математика</option>
                                    <option value="">Геометрия</option>
                                </select>
                                <div className="shop_body_inp_btn"><a href=""><button>Поиск</button></a></div>
                            </div>
                            <div className="shop_body_main">
                                <div className="shop_body_main_name_salary">
                                    <a href='' className="shop_body_main_name">Автоматизированная система управления котельной с тепловыми насосами. </a>
                                    <div className="shop_body_main_name_salary_h">Cтоимость работы: <span>220 ₽</span> </div>
                                </div>
                                <div className="shop_body_main_info">
                                    <div className="shop_body_info_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="shop_body_info_img" />
                                        7Red_ogr_Red
                                    </div>
                                    <div className="shop_body_info_date_box">
                                        <div className="shop_body_info_date_send">дата размещения работы <span>13 Окт в 00:56 </span></div>
                                    </div>
                                    <div className="shop_body_info_views">
                                        <div className="shop_body_info_views_h">62 просмотра </div>
                                        <div className="shop_body_info_views_h">9 покупок  </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_body_main">
                                <div className="shop_body_main_name_salary">
                                    <a href='' className="shop_body_main_name">Автоматизированная система управления котельной с тепловыми насосами. </a>
                                    <div className="shop_body_main_name_salary_h">Cтоимость работы: <span>220 ₽</span> </div>
                                </div>
                                <div className="shop_body_main_info">
                                    <div className="shop_body_info_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="shop_body_info_img" />
                                        7Red_ogr_Red
                                    </div>
                                    <div className="shop_body_info_date_box">
                                        <div className="shop_body_info_date_send">дата размещения работы <span>13 Окт в 00:56 </span></div>
                                    </div>
                                    <div className="shop_body_info_views">
                                        <div className="shop_body_info_views_h">62 просмотра </div>
                                        <div className="shop_body_info_views_h">9 покупок  </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_body_main">
                                <div className="shop_body_main_name_salary">
                                    <a href='' className="shop_body_main_name">Автоматизированная система управления котельной с тепловыми насосами. </a>
                                    <div className="shop_body_main_name_salary_h">Cтоимость работы: <span>220 ₽</span> </div>
                                </div>
                                <div className="shop_body_main_info">
                                    <div className="shop_body_info_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="shop_body_info_img" />
                                        7Red_ogr_Red
                                    </div>
                                    <div className="shop_body_info_date_box">
                                        <div className="shop_body_info_date_send">дата размещения работы <span>13 Окт в 00:56 </span></div>
                                    </div>
                                    <div className="shop_body_info_views">
                                        <div className="shop_body_info_views_h">62 просмотра </div>
                                        <div className="shop_body_info_views_h">9 покупок  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </CabinetLayout>
            <Footer />
        </>
    )
}

export default Spravocnik