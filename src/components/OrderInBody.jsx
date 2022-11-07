import React from 'react'
import { Link } from 'react-router-dom'
import OrderBox from './OrderBox'

const OrderInBody = () => {
    return (
        <>
            <div className="OrderInBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                        <div className="col-9">
                            <div className="order_in_box">
                                <div className="orders_in_name">Поправки в курсовой работе </div>
                                <div className='d-flex align-items-center'>
                                    <a href='' className="ord_head_a_1">Главная </a>
                                    <a href='' className="ord_head_a_1">Курсовая работа </a>
                                    <div className="ord_head_a_2">Экономическая безопасность </div>
                                </div>
                                <div className="orders_in_user">
                                    <div className="orders_in_user_left">
                                        <Link to='/ExpertInfo'><img src="/img/reviews_img.svg" alt="" className="orders_in_user_left_img" /></Link>
                                        <div className="orders_in_user_left_text">
                                            <Link to='/ExpertInfo' className="orders_in_user_left_text_a">user462710 </Link>
                                            <div className="orders_in_user_left_text_p">Был(а) на сайте 43 минуты назад </div>
                                        </div>
                                    </div>
                                    <div className="orders_in_user_right">
                                        <div className="orders_in_user_right_h">Заказ открыт для предложений, исполнитель не выбран</div>
                                        <div className="orders_in_user_right_p">Открыт</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="orders_in_info">
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Заказ </div>
                                                <div className="orders_in_info_text_p">4984042 </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Раздел  </div>
                                                <div className="orders_in_info_text_p">Экономические дисциплины  </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Предмет  </div>
                                                <div className="orders_in_info_text_p">Экономическая безопасность </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Тип работы  </div>
                                                <div className="orders_in_info_text_p">Курсовая работа  </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Антиплагиат  </div>
                                                <div className="orders_in_info_text_p">90% </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="orders_in_info">
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Срок сдачи  </div>
                                                <div className="orders_in_info_text_p_2"><span>18 Окт в 14:00 </span> </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Цена   </div>
                                                <div className="orders_in_info_text_p_2">1 000 ₽   </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Блокировка   </div>
                                                <div className="orders_in_info_text_p_2">10 дней</div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Размещен</div>
                                                <div className="orders_in_info_text_p_2">18 Окт в 10:12   </div>
                                            </div>
                                            <div className="orders_in_info_text">
                                                <div className="orders_in_info_text_h">Просмотров   </div>
                                                <div className="orders_in_info_text_p_2">68  </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="orders_in_main">
                                    <div className="orders_in_main_name">Нужна такая же работа? </div>
                                    <div className="row ">
                                        <div className="col-6">
                                            <div className="orders_in_main_box">
                                                <div className="orders_in_main_text">
                                                    <div className="orders_in_main_h">Разместите заказ </div>
                                                    <img src="/img/arrow_down.png" alt="" className="orders_in_main_img" />
                                                    <div className="orders_in_main_h">Выберите исполнителя</div>
                                                    <img src="/img/arrow_down.png" alt="" className="orders_in_main_img" />
                                                    <div className="orders_in_main_h">Получите результат </div>
                                                </div>
                                            </div></div>
                                        <div className="col-6">
                                            <div className="orders_in_main_box">
                                                <div className="orders_in_main_box_text">
                                                    <div className="orders_in_main_box_h">Гарантия на работу  </div>
                                                    <div className="orders_in_main_box_p">1 год  </div>
                                                </div>
                                                <div className="orders_in_main_box_text">
                                                    <div className="orders_in_main_box_h">Средний балл  </div>
                                                    <div className="orders_in_main_box_p">4.97   </div>
                                                </div>
                                                <div className="orders_in_main_box_text">
                                                    <div className="orders_in_main_box_h">Стоимость   </div>
                                                    <div className="orders_in_main_box_p">Назначаете сами  </div>
                                                </div>
                                                <div className="orders_in_main_box_text">
                                                    <div className="orders_in_main_box_h">Эксперт  </div>
                                                    <div className="orders_in_main_box_p">Выбираете сами  </div>
                                                </div>
                                                <div className="orders_in_main_box_text">
                                                    <div className="orders_in_main_box_h">Уникальность работы  </div>
                                                    <div className="orders_in_main_box_p">от 70% </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orders_in_main_btn"><a href=""><button>Разместить заказ</button></a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderInBody