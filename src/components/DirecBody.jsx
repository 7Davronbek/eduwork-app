import React from 'react'
import { Link } from 'react-router-dom'
import CabinetLayout from './Cabi/CabinetLayout'
import OrderBox from './OrderBox'

const DirecBody = () => {
    return (
        <>
            <CabinetLayout>
                <div className="DirecBody">
                    <div className="direc_body_box">
                        <div className="direc_body_name">Справочник Студворк </div>
                        <div className='d-flex align-items-center'>
                            <a href='' className="ord_head_a_1">Главная </a>
                            <div className="ord_head_a_2">Справочник  </div>
                        </div>

                        <div className="direc_body_inp_box">
                            <input placeholder='Умный поиск по справочнику' type="text" className="direc_body_inp" />
                            <div className="direc_body_inp_btn"><a href=""><button>Поиск</button></a></div>
                        </div>
                        <div className="direc_body_h">Полезные материалы</div>
                        <div className="row">
                            <div className="col-4">
                                <Link to='/DirectoryIn' className="direc_body_main">
                                    <div className="direc_body_main_shadow">
                                    </div>
                                    <img src="/img/direct_1.png" alt="" className="direc_body_main_img" />
                                    <div className="direc_body_main_h">Токсичная продуктивность: как бороться? </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CabinetLayout>

        </>
    )
}

export default DirecBody