import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { REGISTERVERIFY } from '../redux/actions/authAction';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { USER } from '../tools/constants';

const PhoneVerify = () => {

    const [activeTab, setActiveTab] = useState('2');
    const dispatch = useDispatch()

    const [code, setCode] = useState('')

    const phoneVerify = (e) => {
        e.preventDefault()
        dispatch(REGISTERVERIFY(localStorage.getItem(USER), code))
    }
    return (
        <div className='PhoneVerify'>
            <div className="Regest">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div className="regestr_box">
                                <div className="regestr_tab_box">

                                </div>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="2" className=''>
                                        <form onSubmit={phoneVerify} className='myRow'>
                                            <div className="regestr_tab_name">СМС </div>
                                            <input value={code} onChange={e => setCode(e.target.value)} className='regestr_inp form-control' placeholder='****' type="text" name="" id="" />
                                            
                                        
                                            <div className="registr_radio_btn"> <a href=""><button type='submit'>Потвердить  </button></a></div>
                                        </form>
                                    </TabPane>
                                </TabContent>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneVerify