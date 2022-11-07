import React from 'react'

const TrustHome = () => {
    return (
        <>
            <div className="TrustHome">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="trust_home_name">Доверьтесь экспертам</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="trust_home_box_img">
                                <img src="/img/trust_h_1.png" alt="" className="trust_home_img_1" />
                                <img src="/img/trust_h_2.png" alt="" className="trust_home_img_2" />
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="trust_home_h">Экспертов онлайн </div>
                            <div className="trust_home_number">
                                <div className="trust_home_num">3</div>
                                <div className="trust_home_num">3</div>
                                <div className="trust_home_num">3</div>
                            </div>
                            <div className="trust_home_p">Наша система отправит ваш заказ на оценку <span>61 359</span>  авторам. Первые отклики появятся уже в течение 10 минут.</div>
                            <div className="trust_home_btn">
                                <a href=""><button>Разместить заказ</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustHome