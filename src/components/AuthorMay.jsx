import React from 'react'

const AuthorMay = () => {
    return (
        <>
            <div className="AuthorMay">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="author_may_name">Автором может стать каждый</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="author_may_box">
                                <img src="/img/author_may_1.svg" alt="" className="author_may_icon" />
                                <div className="author_may_h">Преподаватель</div>
                                <div className="author_may_p">
                                    Воспользуйтесь накопленными знаниями и педагогическим опытом для дополнительного образования
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="author_may_box">
                                <img src="/img/author_may_2.svg" alt="" className="author_may_icon" />
                                <div className="author_may_h">Репетитор</div>
                                <div className="author_may_p">
                                    Направьте свой педагогический потенциал на онлайн-помощь студентам
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="author_may_box">
                                <img src="/img/author_may_3.svg" alt="" className="author_may_icon" />
                                <div className="author_may_h">Студент</div>
                                <div className="author_may_p">
                                    Ваш багаж знаний уже полон и вы готовы делиться с другими? Становитесь автором сайта
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="author_may_box">
                                <img src="/img/author_may_4.svg" alt="" className="author_may_icon" />
                                <div className="author_may_h">Специалист</div>
                                <div className="author_may_p">
                                    Используйте свои профессиональные знания и помогайте студентам разобраться в предмете
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="author_may_btn"><a href=""><button>Стать автором </button></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorMay