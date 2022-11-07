import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const BestAuthors = () => {
    return (
        <>
            <div className="BestAuthors">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="a_author_name">Лучшие авторы </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
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
                                    <a href="" className="a_author_box">
                                        <div className="a_author_img_box">
                                            <img src="/img/a_author_1.jpg" alt="" className="a_author_img" />
                                            <div className="a_author_pro">
                                                PRO
                                            </div>
                                        </div>

                                        <div className="a_author_h">Davron_7Red</div>
                                        <div className="a_author_p">Гуманитарные дисциплины </div>
                                        <div className="a_author_stats_box">
                                            <div className="a_author_stats_left">
                                                <img className="a_author_stats_icons" src="/img/a_author_like.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                            <div className="a_author_stats_right">
                                                <img className="a_author_stats_icons" src="/img/a_author_trophy.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" className="a_author_box">
                                        <div className="a_author_img_box">
                                            <img src="/img/a_author_1.jpg" alt="" className="a_author_img" />
                                            <div className="a_author_pro">
                                                PRO
                                            </div>
                                        </div>

                                        <div className="a_author_h">Davron_7Red</div>
                                        <div className="a_author_p">Гуманитарные дисциплины </div>
                                        <div className="a_author_stats_box">
                                            <div className="a_author_stats_left">
                                                <img className="a_author_stats_icons" src="/img/a_author_like.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                            <div className="a_author_stats_right">
                                                <img className="a_author_stats_icons" src="/img/a_author_trophy.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" className="a_author_box">
                                        <div className="a_author_img_box">
                                            <img src="/img/a_author_1.jpg" alt="" className="a_author_img" />
                                            <div className="a_author_pro">
                                                PRO
                                            </div>
                                        </div>

                                        <div className="a_author_h">Davron_7Red</div>
                                        <div className="a_author_p">Гуманитарные дисциплины </div>
                                        <div className="a_author_stats_box">
                                            <div className="a_author_stats_left">
                                                <img className="a_author_stats_icons" src="/img/a_author_like.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                            <div className="a_author_stats_right">
                                                <img className="a_author_stats_icons" src="/img/a_author_trophy.svg" alt="" /><div className="a_author_stats_h">1234</div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="a_author_btn">
                                <Link to='/Experts'><button>Подобрать автора </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestAuthors