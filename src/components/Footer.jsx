import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="foot_h">Служба поддержки </div>
                            <div className='d-flex flex-column'>
                                <a href="" className="foot_h">+998 (90) 000 00 00</a>
                                <a href="" className="foot_h">support@studwork.org </a>
                            </div>
                            <div className="foot_btn"><button>Написать нам </button></div>
                            <div className="foot_h">О проекте </div>
                            <div className="foot_p">Пользовательское соглашение </div>
                            <div className="foot_p">Политика конфиденциальности </div>
                            <div className="foot_p">Гарантии </div>
                            <div className="foot_p">Об оплате </div>
                            <div className="foot_p">Отзывы </div>
                            <div className="foot_p">Агентствам </div>
                            <div className="foot_p">Партнерская программа </div>
                            <div className="foot_p">Контакты </div>
                            <div className="foot_p">ВУЗы </div>
                            <div className="foot_p">Карта сайта </div>
                        </div>
                        <div className="col-4">
                            <div className="foot_h">Услуги  </div>
                            <div className="foot_p">Дипломная работа  </div>
                            <div className="foot_p">Курсовая работа   </div>
                            <div className="foot_p">Контрольная работа   </div>
                            <div className="foot_p">Отчет по практике   </div>
                            <div className="foot_p">Реферат</div>
                            <div className="foot_p">Сочинение </div>
                            <div className="foot_p">Онлайн-помощь </div>
                            <div className="foot_p">Чертежи </div>
                            <div className="foot_p">Эссе</div>
                            <div className="foot_p">Диссертация </div>
                            <div className="foot_p">Бизнес-план </div>
                            <div className="foot_p">Все услуги </div>
                        </div>
                        <div className="col-4">
                            {/* <div className="foot_h">Вакансии </div>
                            <div className="foot_p">Стать автором  </div>
                            <div className="foot_p">Все вакансии  </div>
                            <div className="foot_p">Работа для преподавателей  </div>
                            <div className="foot_p">Работа для репетиторов  </div>
                            <div className="foot_p">Работа для учителей </div>
                            <div className="foot_p">Работа для студентов  </div> */}
                            <div className="foot_h2">Статистика  </div>
                            <div className="foot_p"><span>468 362</span>   пользователя  </div>
                            <div className="foot_p"><span>+459 </span>новых пользователей   </div>
                            <div className="foot_p"><span>333 </span>сейчас на сайте  </div>
                            <div className="foot_p"><span>1 680</span>   заказов в сутки   </div>
                            <div className="foot_h2">Мы в социальных сетях   </div>
                            <div className="foot_soc">
                                <a className="foot_icon" href=""><img src="/img/telegram.png" alt="" /></a>
                                <a className="foot_icon" href=""><img src="/img/instagram.png" alt="" /></a>
                                <a className="foot_icon" href=""><img src="/img/facebook.png" alt="" /></a>
                            </div>
                            <div className="foot_h2">Принимаем к оплате   </div>
                            <div className="foot_soc">
                                <a className="foot_icon" href=""><img src="/img/card_1.png" alt="" /></a>
                                <a className="foot_icon" href=""><img src="/img/card_2.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer