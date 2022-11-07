import React from 'react'

const LastOrders = () => {
    return (
        <>
            <div className="LastOrders">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="last_ord_name">Последние заказы </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-6 d-flex flex-column justify-content-between">
                            <div className="last_ord_exer">
                                <img src="/img/last_ord_ecer_1.png" alt="" className="last_ord_exer_img" />
                                <div className="last_ord_exer_text">
                                    <div className="last_ord_text_name">Контрольная работа по химии</div>
                                    <div className="last_ord_text_h">Контрольная работа, технические дисциплины</div>
                                    <div className="last_ord_text_time">
                                        <img src="/img/benef_clock.svg" alt="" className="last_ord_text_clock" />
                                        <div className="last_ord_text_p">4 часа назад</div>
                                    </div>
                                </div>
                            </div>
                            <div className="last_ord_exer">
                                <img src="/img/last_ord_ecer_1.png" alt="" className="last_ord_exer_img" />
                                <div className="last_ord_exer_text">
                                    <div className="last_ord_text_name">Контрольная работа по химии</div>
                                    <div className="last_ord_text_h">Контрольная работа, технические дисциплины</div>
                                    <div className="last_ord_text_time">
                                        <img src="/img/benef_clock.svg" alt="" className="last_ord_text_clock" />
                                        <div className="last_ord_text_p">4 часа назад</div>
                                    </div>
                                </div>
                            </div>
                            <div className="last_ord_exer">
                                <img src="/img/last_ord_ecer_1.png" alt="" className="last_ord_exer_img" />
                                <div className="last_ord_exer_text">
                                    <div className="last_ord_text_name">Контрольная работа по химии</div>
                                    <div className="last_ord_text_h">Контрольная работа, технические дисциплины</div>
                                    <div className="last_ord_text_time">
                                        <img src="/img/benef_clock.svg" alt="" className="last_ord_text_clock" />
                                        <div className="last_ord_text_p">4 часа назад</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">

                            <div className="last_ord_box">
                                <div className="last_ord_text_h">Нужна аналогичная работа? </div>
                                <div className="last_ord_text_h">Закажи у эксперта </div>

                                <div className="last_ord_sale">
                                    <div className="last_ord_sale_h">СКИДКА 10%</div>
                                    <div className="last_ord_sale_h2">по промокоду </div>
                                    <div className="last_ord_sale_p">STUD10 </div>
                                </div>

                                <input className='last_ord_inp' type="text" placeholder='Название заказа' />
                                <input className='last_ord_inp' type="number" placeholder='Ваш номер' />
                                <select className='last_ord_sel' >
                                    <option className='last_ord_opt' value="">Задача</option>
                                    <option className='last_ord_opt' value="">Контрольная работа</option>
                                    <option className='last_ord_opt' value="">Курсовая работа</option>
                                    <option className='last_ord_opt' value="">Дипломная работа</option>
                                </select>
                                <div className="last_ord_btn"><a href=""><button>Разместить заказ </button></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastOrders