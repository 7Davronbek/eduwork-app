import React from 'react'
import { Link } from 'react-router-dom'
import CabinetLayout from './Cabi/CabinetLayout'

const QuestionsBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="QuestionsBody">
                    <div className="ques_body_box">
                        <div className="ques_body_name">Вопросы и ответы по всем предметам  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Вопросы и ответы </div>
                        </div>
                        <img src="/img/ques_body.jpg" alt="" className="ques_body_img" />
                        <div className="ques_body_p">
                            Проблемы с учебой? Эксперты Студворк помогут вам в разделе «Вопрос и ответ»!
                        </div>
                        <div className="ques_body_p">
                            Здесь можно задать вопрос по любому предмету и в ближайшее время получить на него ответ. Эксперты ответят на редкие вопросы и разберут вместе с вами непонятную тему по любому школьному или вузовскому предмету.
                        </div>
                        <a href="" className="ques_body_btn"><button>Задать вопрос </button></a>

                        <div className="ques_body_name_2">Вопросы по всем предметам </div>

                        <div className="ques_body_box">
                            <Link to='/QuestionsIn' className="ques_body_box_a">Вопрос 1 Утверждение, что материальная точка покоится или движется равномерно и прямолинейно, если на нее… </Link>
                            <div className="ques_body_box_down">
                                <div className="ques_body_down_left">
                                    <a href='' className="ques_body_left_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="ques_body_left_user_img" />
                                        <div className="ques_body_left_user_name">user521300 </div>
                                    </a>
                                    <a href="" className="ques_body_left_user_name_2">Физика </a>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_cal.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">20 Окт </div>
                                    </div>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_mail.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">5 </div>
                                    </div>
                                </div>
                                <div className="ques_body_down_right">
                                    <a href="" className='ques_body_down_a'>Ответить</a> </div>
                            </div>
                        </div>
                        <div className="ques_body_box">
                            <Link to='/QuestionsIn' className="ques_body_box_a">Вопрос 1 Утверждение, что материальная точка покоится или движется равномерно и прямолинейно, если на нее… </Link>
                            <div className="ques_body_box_down">
                                <div className="ques_body_down_left">
                                    <a href='' className="ques_body_left_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="ques_body_left_user_img" />
                                        <div className="ques_body_left_user_name">user521300 </div>
                                    </a>
                                    <a href="" className="ques_body_left_user_name_2">Физика </a>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_cal.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">20 Окт </div>
                                    </div>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_mail.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">5 </div>
                                    </div>
                                </div>
                                <div className="ques_body_down_right">
                                    <a href="" className='ques_body_down_a'>Ответить</a> </div>
                            </div>
                        </div>
                        <div className="ques_body_box">
                            <Link to='/QuestionsIn' className="ques_body_box_a">Вопрос 1 Утверждение, что материальная точка покоится или движется равномерно и прямолинейно, если на нее… </Link>
                            <div className="ques_body_box_down">
                                <div className="ques_body_down_left">
                                    <a href='' className="ques_body_left_user">
                                        <img src="/img/a_author_1.jpg" alt="" className="ques_body_left_user_img" />
                                        <div className="ques_body_left_user_name">user521300 </div>
                                    </a>
                                    <a href="" className="ques_body_left_user_name_2">Физика </a>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_cal.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">20 Окт </div>
                                    </div>
                                    <div className="ques_body_left_icon_box">
                                        <img src="/img/ques_mail.png" alt="" className="ques_body_left_icon" />
                                        <div className="ques_body_left_icon_h">5 </div>
                                    </div>
                                </div>
                                <div className="ques_body_down_right">
                                    <a href="" className='ques_body_down_a'>Ответить</a> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </CabinetLayout>
        </>
    )
}

export default QuestionsBody