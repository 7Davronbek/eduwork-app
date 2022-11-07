import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CabinetLayout = (props) => {

    const location = useLocation()

    return (
        <>
            < div className='CabinetLayout' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ">
                            <div className="cab_names">
                                <Link to='/Post' className="cab_name_btn"><button>Разместить заказ</button></Link>
                                <Link to='/Profile' className={`cab_name_h ${location.pathname === '/Profile' ? 'active' : ''}`}>Профиль</Link>
                                <Link to='/Options' className={`cab_name_h ${location.pathname === '/Options' ? 'active' : ''}`}>Настройки</Link>
                                <Link to='/Finans' className={`cab_name_h ${location.pathname === '/Finans' ? 'active' : ''}`}>Финансы</Link>
                                <Link to='/Spec' className={`cab_name_h ${location.pathname === '/Spec' ? 'active' : ''}`}>Специализации</Link>
                                <div className="cab_name_h">Календарь заказов</div>
                                <Link to='/Stats' className={`cab_name_h ${location.pathname === '/Stats' ? 'active' : ''}`}>Статистика</Link>
                                <Link to='/Claims' className={`cab_name_h ${location.pathname === '/Claims' ? 'active' : ''}`}>Претензии</Link>
                                <Link to='/MyShop' className={`cab_name_h ${location.pathname === '/MyShop' ? 'active' : ''}`}>Мой магазин</Link>
                                <Link to='/Servises' className={`cab_name_h ${location.pathname === '/Servises' ? 'active' : ''}`}>Платные услуги</Link>
                            </div>
                        </div>
                        <div className="col-lg-9 ">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default CabinetLayout