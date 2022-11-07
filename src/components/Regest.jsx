import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER, REGISTERVERIFY } from '../redux/actions/authAction';
// import { useNavigate } from 'react-router-dom';

const Regest = () => {

    const isLogin = useSelector(state => state.auth.isLogin)

    const [activeTab, setActiveTab] = useState('2');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const dispatch = useDispatch()
    // const nav = useNavigate()
    const verification = useSelector(state => state.auth.isVerify)

    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')

    const registration = (e) => {
        e.preventDefault()
        dispatch(REGISTER(phone, username, password))
    }

    const verifyRegistration = () => {
        dispatch(REGISTERVERIFY(phone, code, password))
    }

    return (
        <>
            <div className="Regest">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="regestr_box">
                                <div className="regestr_tab_box">
                                    <Nav tabs >
                                        <NavItem>
                                            <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}
                                            >
                                                <div className="regestr_tab_h">
                                                    Вход
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}
                                            >
                                                <div className="regestr_tab_h">
                                                    Регистрация
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                </div>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" className=''>
                                        <Row className='myRow'>
                                            <div className="regestr_tab_name">Вход</div>
                                            <input className='regestr_inp form-control' placeholder='Телефон' type="text" name="" id="" />
                                            <input className='regestr_inp form-control' placeholder='Пароль' type="text" name="" id="" />
                                            <a href='' className="regestr_tab_res">Восстановить пароль</a>
                                            <div className="regestr_btn">
                                                <a href=""><button>Войти </button></a>
                                                {/* <a href=""><button>Регистрация </button></a> */}
                                            </div>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="2" className=''>
                                        <form onSubmit={registration} className='myRow'>
                                            <div className="regestr_tab_name">Регистрация </div>
                                            <input value={username} onChange={e => setUsername(e.target.value)} className='regestr_inp form-control' placeholder='Имя' type="text" name="" id="" />
                                            <input value={phone} onChange={e => setPhone(e.target.value)} required className='regestr_inp form-control' placeholder='Телефон' type="text" name="" id="" />
                                            <input value={password} onChange={e => setPassword(e.target.value)} required className='regestr_inp form-control' placeholder='Пароль' type="password" name="" id="" />
                                            <div className="regestr_tab_h2">Вы </div>
                                            <div className="regestr_radio_check">
                                                <div className="regestr_radio_box"><input className='regestr_radio' type="radio" name='1' />Студент</div>
                                                <div className="regestr_radio_box"><input className='regestr_radio' type="radio" name='1' />Автор </div>
                                            </div>
                                            {verification && <input value={code} onChange={e => setCode(e.target.value)} required className='regestr_inp form-control' placeholder='Code' type="number" name="" id="" />}
                                            {!verification ? <div className="registr_radio_btn"> <a href=""><button type='submit'>Регистрация </button></a></div> : <div className="registr_radio_btn"> <a href=""><button onClick={verifyRegistration}>Потвердить </button></a></div>}

                                            <div className="registr_radio_p">Нажимая кнопку «Регистрация», я принимаю <a href="" className="registr_radio_a">пользовательское соглашение </a> и <a href="" className="registr_radio_a">политику конфиденциальности </a></div>
                                        </form>
                                    </TabPane>
                                </TabContent>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Regest