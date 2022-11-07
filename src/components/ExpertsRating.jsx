import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const ExpertsRating = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <div className="ExpertsRating">
                <div className="experts_rating_tab_box">
                    <div className="experts_rating_tab_box_left">
                        Сортировка по:
                    </div>
                    <div className="experts_rating_tab_box_right">
                        <Nav tabs >
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}
                                >
                                    <div className="experts_rating_right_h">
                                        Рейтингу
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}
                                >
                                    <div className="experts_rating_right_h">
                                        Отзывам
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}
                                >
                                    <div className="experts_rating_right_h">
                                        Дате регистрации
                                    </div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>


                </div>

                <div className="experts_rating_text">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1" className=''>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="2" className=''>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="3" className=''>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                            <div className="experts_rating_box">
                                <div className="experts_rating_text_left">
                                    <a href="" className="experts_rating_text_left_img">
                                        <img className='' src="/img/a_author_1.jpg" alt="" />
                                    </a>
                                    <div className="experts_rating_text_name">
                                        <a href="" className="experts_rating_text_name_a">studprof </a>
                                        <div className="experts_rating_text_name_h">Рейтинг <span>78 377</span></div>
                                        <div className="experts_rating_text_name_p"> 27-Уровень</div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_mid_2">
                                    <div className="experts_rating_text_mid_2_h">Отзывы </div>
                                    <div className="experts_rating_text_mid_2_box">
                                        <img src="/img/like.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h">2 043 </div>
                                        <img src="/img/dizlike.png" alt="" className="experts_rating_text_mid_2_box_icon" />
                                        <div className="experts_rating_text_mid_2_box_h_2">2 043 </div>
                                    </div>
                                </div>
                                <div className="experts_rating_text_right">
                                    <div className="experts_rating_text_right_h">
                                        Выполнены <br /> <span>15 863</span>  работы
                                    </div>
                                    <div className="experts_rating_text_right_box">
                                        <div className="experts_rating_text_right_p"><span>13547</span>  в срок</div>
                                        <div className="experts_rating_text_right_p_2"><span>8487</span>  раньше срока</div>
                                        <div className="experts_rating_text_right_p_3"><span>255</span>  не в срок</div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>



            </div>
        </>
    )
}

export default ExpertsRating