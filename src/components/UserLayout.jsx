import React from 'react'

const UserLayout = (props) => {
    return (
        <div className='UserLayout'>


            <div className="container">

                <div className="row">
                    <div className="col-lg-3 " style={{ backgroundColor: 'red' }}>

                        <div className="cab_names">
                            <div className="cab_name_btn"><button>USERIKI</button></div>
                            <div className="cab_name_h">Профиль</div>
                            <div className="cab_name_h">Настройки</div>
                            <div className="cab_name_h">Финансы</div>
                            <div className="cab_name_h">Специализации   </div>
                            <div className="cab_name_h">Календарь заказов</div>
                            <div className="cab_name_h">Статистика</div>
                            <div className="cab_name_h">Претензии</div>
                            <div className="cab_name_h">Мой магазин</div>
                            <div className="cab_name_h">Платные услуги</div>
                        </div>
                    </div>
                    <div className="col-lg-9 ">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserLayout