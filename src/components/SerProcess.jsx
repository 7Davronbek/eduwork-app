import React from 'react'

const SerProcess = () => {
    return (
        <>
            <div className="SerProcess">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ser_proc_name">Процесс заказа работы </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center d-flex flex-column justify-content-center align-items-center">
                            <div className="ser_proc_box">
                                <img src="/img/ser_proses_1.svg" alt="" className="ser_proc_icon" />
                                <div className="ser_proc_h">1. Размещаете задачу </div>
                                <div className="ser_proc_p">Оформите заявку, в которой описаны все требования к выполнению работы, и опубликуйте ее на сайте.</div>
                            </div>
                        </div>
                        <div className="col-3 text-center d-flex flex-column justify-content-center align-items-center">
                            <div className="ser_proc_box">
                                <img src="/img/ser_proses_2.svg" alt="" className="ser_proc_icon" />
                                <div className="ser_proc_h">2. Ожидаете отклики  </div>
                                <div className="ser_proc_p">Получите первые отклики от авторов уже в течение 10 минут после размещения заказа.</div>
                            </div>
                        </div>
                        <div className="col-3 text-center d-flex flex-column justify-content-center align-items-center">
                            <div className="ser_proc_box">
                                <img src="/img/ser_proses_3.svg" alt="" className="ser_proc_icon" />
                                <div className="ser_proc_h">3. Выбираете исполнителя  </div>
                                <div className="ser_proc_p">Выберите эксперта по стоимости и отзывам. Договоритесь о сделке напрямую с автором.</div>
                            </div>
                        </div>
                        <div className="col-3 text-center d-flex flex-column justify-content-center align-items-center">
                            <div className="ser_proc_box">
                                <img src="/img/ser_proses_4.svg" alt="" className="ser_proc_icon" />
                                <div className="ser_proc_h">4. Получаете результат</div>
                                <div className="ser_proc_p">Скачайте качественную и уникальную работу, выполненную по всем требованиям.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SerProcess