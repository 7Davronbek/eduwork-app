import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

import CabinetLayout from './CabinetLayout'

const StatsBody = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <CabinetLayout>
                <div className="StatsBody">
                    <div className="stats_body_box">
                        <div className="stats_body_name">Статистика  </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Статистика</div>
                        </div>
                        <Nav tabs className=''>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <div className="shopmain_tab_name">
                                        Доход
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <div className="shopmain_tab_name">
                                        Расход
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    <div className="shopmain_tab_name">
                                        Заказы
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    <div className="shopmain_tab_name">
                                        Работы
                                    </div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                                <div className="shopmain_tab_box">
                                    <div className="shopmain_tab_box_h">Общий доход</div>
                                    <div className="shopmain_tab_box_p">Среднее значение за 30 дней:</div>
                                </div>

                            </TabPane>
                        </TabContent>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="2" className=''>
                                <div className="shopmain_tab_box">
                                    <div className="shopmain_tab_box_h">Общий доход</div>
                                    <div className="shopmain_tab_box_p">Среднее значение за 30 дней:</div>
                                </div>

                            </TabPane>
                        </TabContent>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="3" className=''>
                                <div className="shopmain_tab_box">
                                    <div className="shopmain_tab_box_h">Общий доход</div>
                                    <div className="shopmain_tab_box_p">Среднее значение за 30 дней:</div>
                                </div>

                            </TabPane>
                        </TabContent>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="4" className=''>
                                <div className="shopmain_tab_box">
                                    <div className="shopmain_tab_box_h">Общий доход</div>
                                    <div className="shopmain_tab_box_p">Среднее значение за 30 дней:</div>
                                </div>

                            </TabPane>
                        </TabContent>

                    </div>
                </div>
            </CabinetLayout>
        </>
    )
}

export default StatsBody