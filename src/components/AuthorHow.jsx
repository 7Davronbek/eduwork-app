import React from 'react'

const AuthorHow = () => {
    return (
        <>
            <div className="AuthorHow">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="author_how_name">Мы в цифрах </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="author_how_box">
                                <img src="/img/author_how_1.svg" alt="" className="author_how_icon" />
                                <div className="author_how_text">
                                    <div className="author_how_h">Регистрируйтесь на сайте </div>
                                    <div className="author_how_p">Заполните форму регистрации на нашем сайте как эксперт</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="author_how_box">
                                <img src="/img/author_how_2.svg" alt="" className="author_how_icon" />
                                <div className="author_how_text">
                                    <div className="author_how_h">Выполняйте заказы</div>
                                    <div className="author_how_p"> Выбирайте задания по вашей тематике и выполняйте их </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="author_how_box">
                                <img src="/img/author_how_3.svg" alt="" className="author_how_icon" />
                                <div className="author_how_text">
                                    <div className="author_how_h">Зарабатывайте деньги</div>
                                    <div className="author_how_p">Получайте достойное вознаграждение за выполненную работу</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorHow