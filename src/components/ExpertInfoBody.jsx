import React from 'react'
import OrderBox from './OrderBox'

const ExpertInfoBody = () => {
    return (
        <>
            <div className="ExpertInfoBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                        <div className="col-9">
                            <div className="exp_info_body_box">
                                <div className="exp_info_head">
                                    <div className="exp_info_head_left">
                                        <img src="/img/reviews_img.svg" alt="" className="exp_info_head_img" />
                                        <div className="exp_info_head_name_h">Nikitina </div>
                                    </div>
                                    <div className="exp_info_head_right">
                                        <div className="exp_info_head_right_box">
                                            <div className="exp_info_head_right_text">
                                                <img src="/img/a_author_trophy.svg" alt="" className="exp_info_head_right_img" />
                                                <div className="exp_info_head_right_text_h">307 726 </div>
                                            </div>
                                            <div className="exp_info_head_right_text_p">Рейтинг автора </div>
                                        </div>
                                        <div className="exp_info_head_right_box">
                                            <div className="exp_info_head_right_text">
                                                <img src="/img/a_author_trophy.svg" alt="" className="exp_info_head_right_img" />
                                                <div className="exp_info_head_right_text_h">175 626 </div>
                                            </div>
                                            <div className="exp_info_head_right_text_p">Рейтинг заказчика </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="exp_info_main">
                                            <div className="exp_info_main_h">Имя пользователя </div>
                                            <div className="exp_info_main_p">Инна </div>
                                        </div>
                                        <div className="exp_info_main">
                                            <div className="exp_info_main_h">Зарегистрирован  </div>
                                            <div className="exp_info_main_p">1 Ноя 2012  </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="exp_info_main">
                                            <div className="exp_info_main_h"> Рабочий статус  </div>
                                            <div className="exp_info_main_p_2">Готов к работе  </div>
                                        </div>
                                        <div className="exp_info_main">
                                            <div className="exp_info_main_h">Отзывы о работе  </div>
                                            <img src="/img/like.png" alt="" className="exp_info_main_icon" />
                                            <div className="exp_info_main_p_2">2 043 </div>
                                            <img src="/img/dizlike.png" alt="" className="exp_info_main_icon" />
                                            <div className="exp_info_main_p_2"><span>15</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exp_info_btn_box">
                                    <div className="exp_info_btn_1"><button>Написать </button></div>
                                    <div className="exp_info_btn_2"><button>Заказать</button></div>
                                </div>

                                <div className="exp_info_about">
                                    <div className="exp_info_about_name">О себе</div>
                                    <div className="exp_info_about_h">С января 2021 не беру на выполнение работы с проверкой ап.вуз. Проверка только на бесплатной версии антиплагиат.ру. Дальше , в случае необходимости вы заказываете рерайт другому специалисту. </div>
                                    <div className="exp_info_about_h">Работаю в сфере написания работ более 15 лет.</div>
                                    <div className="exp_info_about_h">Выполняю работы по дисциплинам экономического, гуманитарного и юридического направления. </div>
                                    <div className="exp_info_about_h">На сайте с 8 до 21 по МСК. </div>
                                    <div className="exp_info_about_h">Все работы делаются с реальной оригинальностью. </div>
                                </div>
                                <div className="exp_info_spec">
                                    <div className="exp_info_spec_name">Специализация </div>
                                    <div className="exp_info_spec_main">
                                        <div className="exp_info_spec_h">Гуманитарные дисциплины </div>
                                        <div className="exp_info_spec_p">История Связи с общественностью </div>
                                    </div>
                                    <div className="exp_info_spec_main">
                                        <div className="exp_info_spec_h">Гуманитарные дисциплины </div>
                                        <div className="exp_info_spec_p">История Связи с общественностью </div>
                                    </div>
                                    <div className="exp_info_spec_main">
                                        <div className="exp_info_spec_h">Правовые дисциплины </div>
                                        <div className="exp_info_spec_p">Адвокатура Государственная служба Государственное управление </div>
                                    </div>
                                    <div className="exp_info_spec_main">
                                        <div className="exp_info_spec_h">Экономические дисциплины</div>
                                        <div className="exp_info_spec_p">Анализ и прогнозирование Антикризисное управление Банковское дело  </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertInfoBody