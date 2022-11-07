import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Services = () => {
    return (
        <>
            <div className="Services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services_name">Популярные услуги </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    slidesPerGroup={1}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Онлайн-помощь</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_2.png" alt="" className="services_img" />
                                            <div className="services_h">Контрольная работа</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_3.png" alt="" className="services_img" />
                                            <div className="services_h">ВКР</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_4.png" alt="" className="services_img" />
                                            <div className="services_h">Ответы на билеты</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Реферат</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_2.png" alt="" className="services_img" />
                                            <div className="services_h">Шпаргалка</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_3.png" alt="" className="services_img" />
                                            <div className="services_h">Лабораторная работа</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_4.png" alt="" className="services_img" />
                                            <div className="services_h">Презентация</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Автореферат</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Задача</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Диссертация</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Scopus</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Доклад</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Эссе</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Сочинение</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Перевод</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Курсовая работа</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Дистанционная задача</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Кандидатская диссертация</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Докторская диссертация</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services_box">
                                            <img src="/img/services_1.png" alt="" className="services_img" />
                                            <div className="services_h">Бизнес-план</div>
                                            <div className="services_p">от 300 ₽</div>
                                            <div className="services_btn"><button>Заказать</button></div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="services_btn_next">
                                    <a href=""><button>Все услуги</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services