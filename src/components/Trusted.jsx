import React from 'react'

const Trusted = () => {
    return (
        <>
            <div className="Trusted">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><div className="trust_name">Нам доверяют</div></div>
                    </div>
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img src="/img/trust_1.png" alt="" className="trust_img" />
                            <div className="trust_box">
                                <div className="trust_h">467 903 </div>
                                <div className="trust_p">Довольных студента </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img src="/img/trust_2.png" alt="" className="trust_img" />
                            <div className="trust_box">
                                <div className="trust_h">61 236  </div>
                                <div className="trust_p">Лучших авторов  </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img src="/img/trust_3.png" alt="" className="trust_img" />
                            <div className="trust_box">
                                <div className="trust_h">99</div>
                                <div className="trust_p">Компаний  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trusted