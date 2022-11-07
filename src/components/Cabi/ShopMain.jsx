import React, { useState } from 'react'
import CabinetLayout from './CabinetLayout'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';


const ShopMain = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <>
      <CabinetLayout>

        <div className="ShopMain">
          <div className="shopmain_body_box">
            <div className="shopmain_body_name">Мой магазин  </div>
            <div className='d-flex align-items-center'>
              <a href='' className="ord_head_a_1">Главная </a>
              <a href='' className="ord_head_a_1"> Профиль </a>
              <div className="ord_head_a_2">Мой магазин</div>
            </div>

            <Nav tabs className=''>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  <div className="shopmain_tab_name">
                    Мои работы
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  <div className="shopmain_tab_name">
                    Мои покупки
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }}
                >
                  <div className="shopmain_tab_name">
                    Добавить готовую работу
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1" className=''>
                <div className="row">
                  <div className="col-10">
                    <input placeholder='Поиск по ключевым словам' type="text" className="shopmain_tab_inp" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <select className='shopmain_tab_inp'>
                      <option value="">Типы работ</option>
                      <option value="">Задача</option>
                      <option value="">Контрольная работа</option>
                      <option value="">Курсовая работа</option>
                      <option value="">Дипломная работа</option>
                      <option value="">Тест</option>

                    </select>
                  </div>
                  <div className="col-5">
                    <select className='shopmain_tab_inp'>
                      <option value="">Раздел</option>
                      <option value="">Математические дисциплины</option>
                      <option value="">Естественные дисциплины</option>
                      <option value="">Программирование</option>
                      <option value="">Дипломная работа</option>
                      <option value="">Работа с текстом</option>

                    </select>
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    <div className="shopmain_tab_btn"><button>Поиск</button></div>
                  </div>
                </div>
                <div className="shopmain_tab_h">
                  Найдено <span>0</span>  работ
                </div>
                <div className="shopmain_tab_p">
                  Не найдено ни одной работы.
                  <br />
                  Попробуйте изменить условия поиска.
                </div>

              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="2" className=''>

                <div className="shopmain_tab_p">
                  Не найдено ни одной работы.
                  <br />
                  Попробуйте изменить условия поиска.
                </div>
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="3" className=''>

                <div className="row">
                  <div className="col-10">
                    <input placeholder='Заголовок работы' type="text" className="shopmain_tab_inp" />
                  </div>
                  <div className="col-5">
                    <select className='shopmain_tab_inp' name="" id="">
                      <option value="">Тип работы</option>
                      <option value="">Контрольная работа</option>
                      <option value="">Реферат</option>
                      <option value="">Тест</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <select className='shopmain_tab_inp' name="" id="">
                      <option value="">Введите название предмета</option>
                      <option value="">Математические дисциплины</option>
                      <option value="">Алгебра</option>
                      <option value="">Геометрия</option>
                    </select>
                  </div>
                  <div className="col-7">

                    <input placeholder='Укажите название вуза' type="text" className="shopmain_tab_inp" />
                  </div>
                  <div className="col-3">
                    <select className='shopmain_tab_inp' name="" id="">
                      <option value="">Выберите курс</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </div>
                  <div className="col-12"> <div className="shopmain_body_add">Добавить файлы</div></div>
                  <div className="col-12"><div className="row post_body_sal_box">
                    <div className="col-12">
                      <div className="post_body_sal_name">Увеличить количество откликов</div>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-1 d-flex justify-content-center">
                          <input type="checkbox" className='post_body_check' />
                        </div>
                        <div className="col-8">
                          <div className="post_body_check_box">
                            <div className="post_body_check_left">
                              <img src="/img/prof_bonus_1.svg" alt="" className="post_body_check_img" />
                            </div>
                            <div className="post_body_check_right">
                              <div className="post_body_check_right_h">Премиум размещение</div>
                              <div className="post_body_check_right_p">Приоритетное размещение в магазине на месяц</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="post_body_sal_num">200 ₽</div>
                        </div>
                      </div>
                    </div>

                  </div>
                    <div className="post_body_send">
                      <button>Разместить заказ</button>
                    </div></div>
                </div>


              </TabPane>
            </TabContent>


          </div>

        </div>



      </CabinetLayout>


    </>
  )
}

export default ShopMain