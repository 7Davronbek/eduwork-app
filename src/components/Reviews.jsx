import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Reviews = () => {
    return (
        <>
            <div className="Reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="reviews_name">Отзывы о сайте </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="reviews_name_2">2 677 571 отзыв </div>
                            <div className="reviews_name_2">4.97 средняя оценка </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={2}
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
                                    <div className="reviews_box">
                                        <img src="/img/reviews_img.svg" alt="" className="reviews_img" />
                                        <div className="reviews_text">
                                            <div className="reviews_h">user486762 </div>
                                            <div className="reviews_p">Сайт отличный. Информация и инструкции по работе с сайтом доступны и просты для понимания. </div>
                                            <a href="" className="reviews_a">Показать весь отзыв </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="reviews_box">
                                        <img src="/img/reviews_img.svg" alt="" className="reviews_img" />
                                        <div className="reviews_text">
                                            <div className="reviews_h">user486762 </div>
                                            <div className="reviews_p">Сайт отличный. Информация и инструкции по работе с сайтом доступны и просты для понимания. </div>
                                            <a href="" className="reviews_a">Показать весь отзыв </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="reviews_box">
                                        <img src="/img/reviews_img.svg" alt="" className="reviews_img" />
                                        <div className="reviews_text">
                                            <div className="reviews_h">user486762 </div>
                                            <div className="reviews_p">Сайт отличный. Информация и инструкции по работе с сайтом доступны и просты для понимания. </div>
                                            <a href="" className="reviews_a">Показать весь отзыв </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </ Swiper>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="reviews_btn">
                                <a href=""><button>Все отзывы </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews