import React from 'react'

const AuthorTerms = () => {
    return (
        <>
            <div className="AuthorTerms">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><div className="author_terms_name">Комфортные условия работы </div></div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="author_terms_box">
                                <div className="author_terms_icon">
                                    <img src="/img/author_terms_img_1.svg" alt="" className="author_terms_img" />
                                    <div className="author_terms_h">Оплата </div>
                                </div>
                                <div className="author_terms_p">Заработок на сайте зависит только от вас самих. Вы можете брать в работу неограниченное количество заказов, тем самым формируя свой достаток. Разные типы заданий оцениваются по-разному. Так, например, за решение задачи можно получить 50 рублей, а за написание дипломной работы – от 5000 рублей. Все зависит от вашей компетенции, желания и времени.</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="author_terms_box">
                                <div className="author_terms_icon">
                                    <img src="/img/author_terms_img_2.svg" alt="" className="author_terms_img" />
                                    <div className="author_terms_h">Резюме  </div>
                                </div>
                                <div className="author_terms_p">На сайте не требуется размещение резюме. Вместо этого вы можете заполнить профиль: укажите свои специализации и типы работ, которые готовы выполнять. Также не забудьте прикрепить примеры готовых работ, которые вы выполняли, чтобы заказчики понимали, что вы за специалист. </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="author_terms_box">
                                <div className="author_terms_icon">
                                    <img src="/img/author_terms_img_3.svg" alt="" className="author_terms_img" />
                                    <div className="author_terms_h">График  </div>
                                </div>
                                <div className="author_terms_p">Эксперты на сайте могут работать в любое удобное для них время. Вы можете сами сформировать график и выполнять работы только в установленное время. Такая привилегия позволит совмещать основную работу с заработком на сервисе Студворк. </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="author_terms_box">
                                <div className="author_terms_icon">
                                    <img src="/img/author_terms_img_4.svg" alt="" className="author_terms_img" />
                                    <div className="author_terms_h">Сроки выполнения  </div>
                                </div>
                                <div className="author_terms_p">Как правило, заказчики указывают в заказе срок выполнения задания, который необходимо соблюдать. Вы можете выбрать любую работу, которая подходит для вашего времени и приступить к сотрудничеству. </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="author_terms"><a href=""><button>Стать автором </button></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorTerms