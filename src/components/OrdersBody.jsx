import React from 'react'
import { Link } from 'react-router-dom'
import CabinetLayout from './Cabi/CabinetLayout'
import OrderBox from './OrderBox'

const OrdersBody = () => {
    return (
        <>

            <CabinetLayout>
                <div className="OrdersBody">
                    <div className="orders_body_box">
                        <div className="orders_body_name">Лента заказов</div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Лента заказов </div>
                        </div>
                        <input placeholder='Поиск по ключевым словам' type="text" className="orders_body_inp" />
                        <div className="orders_body_inp_box">
                            <select className='orders_body_inp_box_sel me-4'>
                                <option value="">Все типы работ</option>
                                <option value="">Задача</option>
                                <option value="">Контрольная работа</option>
                                <option value="">Курсовая работа</option>
                                <option value="">Дипломная работа</option>
                            </select>
                            <select className='orders_body_inp_box_sel me-4'>
                                <option value="">Все предметы</option>
                                <option value="">Алгебра</option>
                                <option value="">Аналитическая геометрия</option>
                                <option value="">Вычислительная математика</option>
                                <option value="">Геометрия</option>
                            </select>
                            <div className="orders_body_inp_btn"><a href=""><button>Поиск</button></a></div>
                        </div>
                        <div className="orders_body_main">
                            <Link to='/OrderIn' className="orders_body_main_name">Теория воспитания (курсовая работа) </Link>
                            <div className="orders_body_main_box">
                                <div className="orders_body_main_h"># 4975140 Отчет по практике Технические дисциплины Электроэнергетика </div>
                                <div className="orders_body_main_p">Открыт</div>
                            </div>
                            <div className="orders_body_main_info">
                                <div className="orders_body_info_user">
                                    <img src="/img/a_author_1.jpg" alt="" className="orders_body_info_img" />
                                    7Red_ogr_Red
                                </div>
                                <div className="orders_body_info_date_box">
                                    <div className="orders_body_info_date_send">Дата создания: <span>13 Окт в 00:56 </span></div>
                                    <div className="orders_body_info_date_get">Срок здачи: <span>18 Окт в 00:56</span></div>
                                </div>
                                <div className="orders_body_info_views">
                                    <div className="orders_body_info_views_h">62 просмотра </div>
                                    <div className="orders_body_info_views_h">9 откликов </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders_body_main">
                            <Link to='/OrderIn' className="orders_body_main_name">Теория воспитания (курсовая работа) </Link>
                            <div className="orders_body_main_box">
                                <div className="orders_body_main_h"># 4975140 Отчет по практике Технические дисциплины Электроэнергетика </div>
                                <div className="orders_body_main_p">Открыт</div>
                            </div>
                            <div className="orders_body_main_info">
                                <div className="orders_body_info_user">
                                    <img src="/img/a_author_1.jpg" alt="" className="orders_body_info_img" />
                                    7Red_ogr_Red
                                </div>
                                <div className="orders_body_info_date_box">
                                    <div className="orders_body_info_date_send">Дата создания: <span>13 Окт в 00:56 </span></div>
                                    <div className="orders_body_info_date_get">Срок здачи: <span>18 Окт в 00:56</span></div>
                                </div>
                                <div className="orders_body_info_views">
                                    <div className="orders_body_info_views_h">62 просмотра </div>
                                    <div className="orders_body_info_views_h">9 откликов </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders_body_main">
                            <Link to='/OrderIn' className="orders_body_main_name">Теория воспитания (курсовая работа) </Link>
                            <div className="orders_body_main_box">
                                <div className="orders_body_main_h"># 4975140 Отчет по практике Технические дисциплины Электроэнергетика </div>
                                <div className="orders_body_main_p">Открыт</div>
                            </div>
                            <div className="orders_body_main_info">
                                <div className="orders_body_info_user">
                                    <img src="/img/a_author_1.jpg" alt="" className="orders_body_info_img" />
                                    7Red_ogr_Red
                                </div>
                                <div className="orders_body_info_date_box">
                                    <div className="orders_body_info_date_send">Дата создания: <span>13 Окт в 00:56 </span></div>
                                    <div className="orders_body_info_date_get">Срок здачи: <span>18 Окт в 00:56</span></div>
                                </div>
                                <div className="orders_body_info_views">
                                    <div className="orders_body_info_views_h">62 просмотра </div>
                                    <div className="orders_body_info_views_h">9 откликов </div>
                                </div>
                            </div>

                            {/* <div className="col-2">
                            <OrderBox />
                        </div> */}
                        </div>
                    </div>
                </div>
            </CabinetLayout>
       
        </>
    )
}

export default OrdersBody