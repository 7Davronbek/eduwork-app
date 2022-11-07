import React from 'react'
import OrderBox from './OrderBox'

const QuestionsInBody = () => {
    return (
        <>
            <div className="QuestionsInBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                        <div className="col-9">
                            <div className="ques_in_body_box">
                                <div className="ques_in_body_name">Вопросы и ответы по всем предметам  </div>
                                <div className='d-flex align-items-center'>
                                    <a href='' className="ord_head_a_1">Главная </a>
                                    <div className="ord_head_a_2">Вопросы и ответы </div>
                                </div>
                                <div className="ques_in_body_ques">Вопрос</div>
                                <div className="ques_in_body_h">
                                    Есть локальный сервер с серым ип, и есть впс с белым. Как правильно настроить? У меня на моем компютере крутится сервер, мне нужно что бы он иногда был доступен из вне по белому ип. У меня есть там впс с поднятым опенвпн, как мне правильно все донастроить? Или какую нибудь инструкцию.
                                </div>

                                <div className="ques_in_body_user">

                                    <div className="ques_in_body_user_left">
                                        <a href='' className="ques_in_body_user_left_name">
                                            <img src="/img/a_author_1.jpg" alt="" className="ques_in_body_user_left_name_img" />
                                            <div className="ques_in_body_user_left_name_h">7-ReD</div>
                                        </a>
                                        <div className="ques_in_body_user_left_name">
                                            <img src="/img/ques_cal.png" alt="" className="ques_in_body_user_left_name_img_2" />
                                            <div className="ques_in_body_user_left_name_h">20 Окт в 21:55 </div>
                                        </div>
                                    </div>

                                    <div className="ques_in_body_btn">
                                        <div className="ques_in_body_btn_1"><button>Ответить </button></div>
                                        <div className="ques_in_body_btn_2"><button>Задать свой вопрос  </button></div>
                                    </div>


                                </div>

                                <div className="ques_in_body_ans">
                                    <div className="ques_in_body_ans_h">Ответы</div>
                                    <div className="ques_in_body_ans_p">Нет ответов</div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionsInBody