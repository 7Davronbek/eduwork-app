import React from 'react'

const OrderBox = () => {
    return (
        <>
            <div className="OrderBox">
                <div className="order_box_btn"><a href=""><button>Разместить заказ </button></a></div>
                <div className="order_box_text">
                    <img src="/img/benef_clock.svg" alt="" className="order_box_img" />
                    <div className="order_box_word">
                        <div className="order_box_word_h">61 536 экспертов</div>
                        <div className="order_box_word_p">помогают студентам </div>
                    </div>
                </div>
                <div className="order_box_text">
                    <img src="/img/benef_clock.svg" alt="" className="order_box_img" />
                    <div className="order_box_word">
                        <div className="order_box_word_h">12 725 заданий</div>
                        <div className="order_box_word_p">за последние сутки </div>
                    </div>
                </div>
                <div className="order_box_text">
                    <img src="/img/benef_clock.svg" alt="" className="order_box_img" />
                    <div className="order_box_word">
                        <div className="order_box_word_h">10 минут</div>
                        <div className="order_box_word_p">среднее время отклика </div>
                    </div>
                </div>

                <div className="order_box_popular">Популярные услуги </div>
                <a href='' className="order_box_pop_box">
                    <img src="/img/order_work_1.png" alt="" className="order_box_pop_img" />
                    <div className="order_box_pop_word">
                        <div className="order_box_pop_word_p">Дипломная от</div>
                        <div className="order_box_pop_word_h">5000 ₽ </div>
                    </div>
                </a>
                <a href='' className="order_box_pop_box">
                    <img src="/img/order_work_1.png" alt="" className="order_box_pop_img" />
                    <div className="order_box_pop_word">
                        <div className="order_box_pop_word_p">Дипломная от</div>
                        <div className="order_box_pop_word_h">5000 ₽ </div>
                    </div>
                </a>
                <a href='' className="order_box_pop_box">
                    <img src="/img/order_work_1.png" alt="" className="order_box_pop_img" />
                    <div className="order_box_pop_word">
                        <div className="order_box_pop_word_p">Дипломная от</div>
                        <div className="order_box_pop_word_h">5000 ₽ </div>
                    </div>
                </a>
                <a href='' className="order_box_pop_box">
                    <img src="/img/order_work_1.png" alt="" className="order_box_pop_img" />
                    <div className="order_box_pop_word">
                        <div className="order_box_pop_word_p">Дипломная от</div>
                        <div className="order_box_pop_word_h">5000 ₽ </div>
                    </div>
                </a>
                <div className="order_box_btn"><a href=""><button>Все предложения  </button></a></div>

            </div>
        </>
    )
}

export default OrderBox