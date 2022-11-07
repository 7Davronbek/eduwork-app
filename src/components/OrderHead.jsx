import React from 'react'

const OrderHead = () => {
    return (
        <>
            <div className="OrderHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex">
                            <a href="" className="ord_head_a">Главная </a>
                            <a href="" className="ord_head_a">Услуги </a>
                            <div className="ord_head_a_2">Новый заказ </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-7">
                            <div className="ord_head_box">
                                <div className="ord_head_h">Опишите свою задачу</div>
                                <div className="ord_head_text">
                                    <div className="ord_head_text_h">Скидка 10%</div>
                                    <div className="ord_head_text_p">промокоду </div>
                                    <div className="ord_head_text_p_2">STUD10</div>
                                </div>
                                <input placeholder='Название заказа' type="text" className="ord_head_inp" />
                                <select className='ord_head_select'>
                                    <option className="ord_head_opt">Задача</option>
                                    <option className="ord_head_opt">Контрольная работа</option>
                                    <option className="ord_head_opt">Курсовая работа</option>
                                    <option className="ord_head_opt">Лабораторная работа</option>
                                </select>
                                <input placeholder='Телефон' type="number" className="ord_head_inp" />
                                <div className="ord_head_btn"><a href=""><button>Разместить заказ </button></a></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ord_head_box_2">
                                <img src="/img/example_icon.jpg" alt="" className="ord_head_icon" />
                                <div className="ord_head_icon_text">
                                    <div className="ord_head_icon_h">Заказано работ</div>
                                    <div className="ord_head_icon_p">1 616 за сутки</div>
                                </div>
                            </div>
                            <div className="ord_head_box_2">
                                <img src="/img/example_icon.jpg" alt="" className="ord_head_icon" />
                                <div className="ord_head_icon_text">
                                    <div className="ord_head_icon_h">Заказано работ</div>
                                    <div className="ord_head_icon_p">1 616 за сутки</div>
                                </div>
                            </div>
                            <div className="ord_head_box_2">
                                <img src="/img/example_icon.jpg" alt="" className="ord_head_icon" />
                                <div className="ord_head_icon_text">
                                    <div className="ord_head_icon_h">Заказано работ</div>
                                    <div className="ord_head_icon_p">1 616 за сутки</div>
                                </div>
                            </div>
                            <div className="ord_head_box_2">
                                <img src="/img/example_icon.jpg" alt="" className="ord_head_icon" />
                                <div className="ord_head_icon_text">
                                    <div className="ord_head_icon_h">Заказано работ</div>
                                    <div className="ord_head_icon_p">1 616 за сутки</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderHead