import React from 'react'
import CabinetLayout from './CabinetLayout'

const FinansBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="FinansBody">
                    <div className="finans_body_box">
                        <div className="finans_body_name">Баланс  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Баланс</div>
                        </div>

                        <div className="row justify-content-between finans_body_sal_box">
                            <div className="col-5">
                                <div className="finans_body_sal">
                                    <div className="finans_body_sal_h">Текущий баланс</div>
                                    <div className="finans_body_sal_p">0 ₽</div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="finans_body_sal_btn"><button>Пополнить баланс</button></div>
                            </div>
                        </div>
                        <div className="row justify-content-between finans_body_sal_box">
                            <div className="col-5">
                                <div className="finans_body_sal">
                                    <div className="finans_body_sal_h">Доступно к выводу</div>
                                    <div className="finans_body_sal_p">0 ₽</div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="finans_body_sal_btn"><button>Вывести средства</button></div>
                            </div>
                        </div>
                    </div>



                </div>
            </CabinetLayout>
        </>
    )
}

export default FinansBody