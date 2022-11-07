import React from 'react'
import CabinetLayout from './Cabi/CabinetLayout'
import OrderBox from './OrderBox'

const ContactBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="ContactBody">
                    <div className="con_body_box">
                        <div className="con_body_name">Служба технической поддержки  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Служба технической поддержки </div>
                        </div>

                        <div className="con_body_main">
                            <div className="con_body_main_h">
                                Позвоните нам
                            </div>
                            <div className="con_body_main_call">
                                <a href="" className="con_body_main_a">+998 (90) 000-90-90</a>
                                <a href="" className="con_body_main_a"><span>+998 (90) 000-90-90</span></a>
                            </div>
                            <div className="con_body_main_p">Служба поддержки работает по будням с 8:00 до 20:00 по московскому времени (звонок бесплатный) </div>
                        </div>
                        <div className="con_body_main">
                            <div className="con_body_main_h">
                                E-mail поддержка
                            </div>
                            <a href='' className="con_body_main_a">support@studwork.org </a>
                        </div>
                        <div className="con_body_main">
                            <div className="con_body_main_h">
                                Популярные вопросы
                            </div>
                            <div className="con_body_main_p">Попробуйте найти ответ на интересующий вас вопрос в нашей базе знаний. </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">С чего начать работу эксперту? </a>
                                </div>
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">Как разместить заказ? </a>
                                </div>
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">Как загрузить файл с готовой работой?  </a>
                                </div>
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">Как оплатить заказ?  </a>
                                </div>
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">Как пополнить баланс? </a>
                                </div>
                                <div className="col-6 mb-3">
                                    <a href="" className="con_body_main_a_2">Что такое комиссия?  </a>
                                </div>
                                <div className="col-12">
                                    <div className="con_body_main_btn"><a href=""><button>База знаний </button></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CabinetLayout>

        </>
    )
}

export default ContactBody