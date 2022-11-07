import React from 'react'

const AuthorNum = () => {
    return (
        <>
            <div className="AuthorNum">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="author_num_name">Мы в цифрах </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="author_num_box">
                                <img src="/img/author_we_1.svg" alt="" className="author_num_icon" />
                                <div className="author_num_text">
                                    <div className="author_num_h">407 150 </div>
                                    <div className="author_num_p">Клиентов зарегистрировано на бирже</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="author_num_box">
                                <img src="/img/author_we_2.svg" alt="" className="author_num_icon" />
                                <div className="author_num_text">
                                    <div className="author_num_h">499 990 ₽</div>
                                    <div className="author_num_p">Средний доход автора на сайте за месяц</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="author_num_box">
                                <img src="/img/author_we_3.svg" alt="" className="author_num_icon" />
                                <div className="author_num_text">
                                    <div className="author_num_h">16 184 </div>
                                    <div className="author_num_p">Заказов размещено за последние сутки</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorNum