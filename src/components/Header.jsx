import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4">
              <div className="head_name">Биржа помощи студентам</div>
              <div className="head_p">С нами работают лучшие авторы учебных работ</div>
              <div className="head_box">
                <Link to='/NewOrder' className="head_client"><button> Разместить заказ</button></Link>
                <Link to='/OrderAuthor' className="head_author"><button> Я автор</button></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="head_img"><img src="/img/head_man.png" alt="" className="head_foto" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header