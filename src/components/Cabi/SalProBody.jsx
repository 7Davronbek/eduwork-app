import React from 'react'
import CabinetLayout from './CabinetLayout'

const SalProBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="SalProBody">
                    <div className="salpro_body_box">
                        <div className="salpro_body_box_name">Купите PRO-аккаунт для получения всех преимуществ сервиса  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <a href='' className="ord_head_a_1"> Платные услуги </a>
                            <div className="ord_head_a_2"> PRO-статус</div>
                        </div>

                        <div className="row salpro_main_box">
                            <div className="col-5">
                                <div className="salpro_main">
                                    <div className="salpro_main_h">Бонусы для экспертов</div>
                                    <div className="salpro_main_p">Комиссия снижена на 2%</div>
                                    <div className="salpro_main_p">Видны предложения других экспертов</div>
                                    <div className="salpro_main_p">Больше доверия со стороны заказчика</div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="salpro_main">
                                    <div className="salpro_main_h">Бонусы для заказчиков</div>
                                    <div className="salpro_main_p">Размещение в платном каталоге — 100 ₽</div>
                                    <div className="salpro_main_p">Больше доверия со стороны эксперта</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <div className="salpro_sal">
                                    <div className="salpro_sal_h">1 неделя</div>
                                    <div className="salpro_sal_p">7 дней</div>
                                    <div className="salpro_sal_s">500 ₽</div>
                                    <div className="salpro_sal_btn">Купить</div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="salpro_sal">
                                    <div className="salpro_sal_h">1 месяц</div>
                                    <div className="salpro_sal_p">31 день</div>
                                    <div className="salpro_sal_s">1 000 ₽</div>
                                    <div className="salpro_sal_btn">Купить</div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="salpro_sal">
                                    <div className="salpro_sal_h">6 месяцев</div>
                                    <div className="salpro_sal_p">182 дня</div>
                                    <div className="salpro_sal_s">2 500 ₽</div>
                                    <div className="salpro_sal_btn">Купить</div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="salpro_sal">
                                    <div className="salpro_sal_h">1 год</div>
                                    <div className="salpro_sal_p">365 дней</div>
                                    <div className="salpro_sal_s">5 000 ₽</div>
                                    <div className="salpro_sal_btn">Купить</div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </CabinetLayout>

        </>
    )
}

export default SalProBody