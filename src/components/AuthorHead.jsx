import React from 'react'

const AuthorHead = () => {
    return (
        <>
            <div className="AuthorHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <a href="" className="ord_head_a">Главная </a>
                            <div className="ord_head_a_2">Стать автором </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="author_head_name">Стань автором студенческих работ </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <img src="/img/author_head.png" alt="" className="author_head_img" />
                        </div>
                        <div className="col-5">
                            <div className="author_head_box">
                                <img src="/img/example_icon.jpg" alt="" className="author_head_icon" />
                                <div className="author_head_h">Доход от 70 000 ₽ </div>
                            </div>
                            <div className="author_head_box">
                                <img src="/img/example_icon.jpg" alt="" className="author_head_icon" />
                                <div className="author_head_h">Гибкий график работы  </div>
                            </div>
                            <div className="author_head_box">
                                <img src="/img/example_icon.jpg" alt="" className="author_head_icon" />
                                <div className="author_head_h">Полная конфиденциальность  </div>
                            </div>
                            <div className="author_head_btn"><a href=""><button>Стать автором </button></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorHead