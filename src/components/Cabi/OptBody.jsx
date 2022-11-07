import React from 'react'
import CabinetLayout from './CabinetLayout'

const OptBody = () => {
  return (
    <>

      <CabinetLayout>
        <div className="OptBody">
          <div className="opt_body_box">
            <div className="opt_body_name">Служба технической поддержки  </div>
            <div className='d-flex align-items-center'>
              <a href='' className="ord_head_a_1">Главная </a>
              <div className="ord_head_a_2">Настройки</div>
            </div>


            <div className="row justify-content-between">
              <div className="col-5">
                <div className="opt_body_info">
                  <div className="opt_body_info_h">Личная информация</div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Логин</div>
                    <input placeholder='User_Name' type="text" className="opt_body_info_box_inp" />
                  </div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Имя</div>
                    <input placeholder='User_Name' type="text" className="opt_body_info_box_inp" />
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="opt_body_info">
                  <div className="opt_body_info_h">Личная информация</div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">E-mail</div>
                    <input placeholder='User_Name' type="text" className="opt_body_info_box_inp" />
                  </div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Пол</div>
                    <input placeholder='User_Name' type="text" className="opt_body_info_box_inp" />
                  </div>
                </div>
              </div>
            </div>

            <div className="opt_body_info_btn"><button>Изменить пароль</button></div>

          </div>
        </div>
      </CabinetLayout>
    </>
  )
}

export default OptBody