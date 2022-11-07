import React from 'react'

const Example = () => {
    return (
        <>
            <div className="Example">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="example_name">Пример выполненной дипломной работы</div>
                            <div className="example_name_2">Тема: Оценка стоимости земельного участка под строительство </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="row justify-content-evenly">
                                <div className="col-5">
                                    <div className="example_left">
                                        <img src="/img/example_1.jpg" alt="" className="example_left_img" />
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="row h-100 align-content-between">
                                        <div className="col-6">
                                            <div className="example_right">
                                                <img src="/img/example_1.jpg" alt="" className="example_right_img" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="example_right">
                                                <img src="/img/example_1.jpg" alt="" className="example_right_img" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="example_right">
                                                <img src="/img/example_1.jpg" alt="" className="example_right_img" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="example_right">
                                                <img src="/img/example_1.jpg" alt="" className="example_right_img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="example_box">
                                <img src="/img/example_icon.jpg" alt="" className="example_icon" />
                                <div className="example_mid">
                                    <div className="example_mid_top">
                                        <div className="example_mid_h">Скачайте образец готовой работы</div>
                                        <input placeholder='E-mail' type="text" className="example_mid_inp" /></div>
                                    <div className="example_mid_bottom">
                                        <div className="example_mid_p">
                                            Нажимая кнопку «Скачать», я принимаю
                                            <a href="" className="example_mid_a"> пользовательское соглашение </a>
                                            и
                                            <a href="" className="example_mid_a"> политику конфиденциальности </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="example_end">
                                    <div className="example_end_btn"><button>Скачать </button><a href="">
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example