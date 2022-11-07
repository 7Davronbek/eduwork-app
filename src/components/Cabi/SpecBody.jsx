import React, { useState } from 'react'
import CabinetLayout from './CabinetLayout'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const SpecBody = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (

        <>
            <CabinetLayout>
                <div className="SpecBody">
                    <div className="spec_body_box">
                        <div className="spec_body_name">Моя специализация </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <a href='' className="ord_head_a_1"> Профиль </a>
                            <div className="ord_head_a_2"> Моя специализация</div>
                        </div>
                        <input placeholder='Введите название предмета' type="text" className="spec_body_inp" />

                        <div className="row mt-5">
                            <div className="col-6">
                                <Nav tabs className=''>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}>
                                            <div className="spec_tab_name">
                                                Математические дисциплины
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}>
                                            <div className="spec_tab_name">
                                                Естественные дисциплины
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}>
                                            <div className="spec_tab_name">
                                                Технические дисциплины
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}>
                                            <div className="spec_tab_name">
                                                Программирование
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div className="col-6">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" className=''>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Агрономия</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Археология</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Геометрия</div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="2" className=''>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Агрономия</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Археология</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Геометрия</div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="3" className=''>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Агрономия</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Археология</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Геометрия</div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="4" className=''>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Агрономия</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Археология</div>
                                        </div>
                                        <div className="spec_tab_pane">
                                            <input type="checkbox" className="spec_tab_pane_check" />
                                            <div className="spec_tab_pane_h">Геометрия</div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>

                </div>
            </CabinetLayout>
        </>
    )
}

export default SpecBody