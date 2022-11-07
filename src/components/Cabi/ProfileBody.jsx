import React from 'react'
import CabinetLayout from './CabinetLayout'

const ProfileBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="ProfileBody">
                    <div className="prof_body_box">
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
                        <div className="prof_body_about">
                            <div className="prof_body_about_h">О себе</div>
                            <div className="prof_body_about_p">Информация о себе еще не заполнена.</div>
                            <div className="prof_body_about_btn"><button>Заполнить</button></div>
                        </div>
                        <div className="prof_body_comission">
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">Комиссия</div>
                                <div className="prof_body_comis_box_p">Рейтинг</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h"><span>22%</span> </div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">0</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">21%</div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">100</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">20%</div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">150</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">19%</div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">300</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">18%</div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">500</div>
                            </div>
                            <div className="prof_body_comis_box">
                                <div className="prof_body_comis_box_h">17%</div>
                                <input type="radio" className='prof_body_comis_box_radio' />
                                <div className="prof_body_comis_box_p">1200</div>
                            </div>
                        </div>
                        <div className="prof_body_bonus">
                            <div className="prof_body_bonus_name">Бонусы</div>

                            <div className="row">
                                <div className="col-3">
                                    <div className="prof_body_bonus_box_1">
                                        <div className="prof_body_bonus_box_1_h">Уровень 0</div>
                                        <img src="/img/services_1.png" alt="" className="prof_body_bonus_box_1_img" />
                                        <div className="prof_body_bonus_box_1_p">Рейтинг 0</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="prof_body_bonus_box_2">
                                        <img src="/img/prof_bonus_1.svg" alt="" className="prof_body_bonus_box_2_img" />
                                        <div className="prof_body_bonus_box_2_p">-3% скидка на 1 заказ</div>
                                        <div className="prof_body_bonus_box_2_btn"><button>Выбрать</button></div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="prof_body_bonus_box_2">
                                        <img src="/img/prof_bonus_2.svg" alt="" className="prof_body_bonus_box_2_img" />
                                        <div className="prof_body_bonus_box_2_p">Премиум размещение</div>
                                        <div className="prof_body_bonus_box_2_btn"><button>Выбрать</button></div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="prof_body_bonus_box_2">
                                        <img src="/img/prof_bonus_3.svg" alt="" className="prof_body_bonus_box_2_img" />
                                        <div className="prof_body_bonus_box_2_p">Срочный заказ</div>
                                        <div className="prof_body_bonus_box_2_btn"><button>Выбрать</button></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </CabinetLayout>
        </>
    )
}

export default ProfileBody