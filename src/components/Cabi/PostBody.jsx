import React from 'react'
import CabinetLayout from './CabinetLayout'

const PostBody = () => {
  return (
    <>
      <CabinetLayout>
        <div className="PostBody">
          <div className="post_body_box">
            <div className="post_body_name">Разместить заказ</div>
            <div className="row">
              <div className="col-12 mt-4">
                <input type="text" placeholder='Введите название работы' className="post_body_inp" />
              </div>
              <div className="col-4 mt-4">
                <select className="post_body_inp">
                  <option value="">Тип работы</option>
                  <option value="">Задача</option>
                  <option value="">Контрольная</option>
                  <option value="">Курсовая</option>
                  <option value="">Лабораторная</option>
                  <option value="">Практика</option>
                </select>
              </div>
              <div className="col-8 mt-4">
                <select className="post_body_inp">
                  <option value="">Введите название предмета</option>
                  <option value="">Математические дисциплины</option>
                  <option value="">Алгебра</option>
                  <option value="">Векторная алгебра</option>
                  <option value="">Геометрия</option>
                  <option value="">Дифференциальная геометрия</option>
                </select>
              </div>
              <div className="col-4 mt-4">
                <input type="text" placeholder='Дата сдачи' className="post_body_inp" />
              </div>
              <div className="col-8 mt-4 d-flex align-items-center">
                <div className="post_body_h">Время сдачи</div>
                <select className='post_body_inp_num' >
                  <option value="">00</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                  <option value="">08</option>
                  <option value="">09</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                </select>
                <select className='post_body_inp_num' >
                  <option value="">00</option>
                  <option value="">05</option>
                  <option value="">10</option>
                  <option value="">15</option>
                  <option value="">20</option>
                  <option value="">25</option>
                  <option value="">30</option>
                  <option value="">35</option>
                  <option value="">40</option>
                  <option value="">45</option>
                  <option value="">50</option>
                  <option value="">55</option>
                </select>
              </div>
            </div>
            <div className="post_body_add">
              Добавить файлы
            </div>
            <div className="row post_body_sal_box">
              <div className="col-12 d-flex align-items-center">
                <input placeholder='Стоимость' type="text" className="post_body_sal_inp" />
                <div className="post_body_sal_h">Сумма, которую вы готовы заплатить эксперту</div>
              </div>
              <div className="col-12 d-flex align-items-center mt-4">
                <div className="post_body_sal_h">Срок блокировки оплаты</div>
                <select className='post_body_sal_sel' name="" id="">
                  <option value="">5 дней</option>
                  <option value="">10 дней</option>
                  <option value="">15 дней</option>
                  <option value="">20 дней</option>
                  <option value="">40 дней</option>
                </select>
              </div>
              <div className="col-12">
                <div className="post_body_sal_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste culpa itaque dolore et, eligendi pariatur. Ad unde aperiam nam sed voluptates nobis laboriosam quas minus veritatis! Modi, esse! Tenetur.</div>
              </div>
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
                        <div className="post_body_check_right_p">Приоритетное размещение в ленте на 24 часа</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="post_body_sal_num">200 ₽</div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4">
                  <div className="col-1 d-flex justify-content-center">
                    <input type="checkbox" className='post_body_check' />
                  </div>
                  <div className="col-8">
                    <div className="post_body_check_box">
                      <div className="post_body_check_left">
                        <img src="/img/prof_bonus_2.svg" alt="" className="post_body_check_img" />
                      </div>
                      <div className="post_body_check_right">
                        <div className="post_body_check_right_h">Срочный заказ</div>
                        <div className="post_body_check_right_p">Яркое выделение заказа в ленте</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="post_body_sal_num">200 ₽</div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4">
                  <div className="col-1 d-flex justify-content-center">
                    <input type="checkbox" className='post_body_check' />
                  </div>
                  <div className="col-8">
                    <div className="post_body_check_box">
                      <div className="post_body_check_left">
                        <img src="/img/prof_bonus_3.svg" alt="" className="post_body_check_img" />
                      </div>
                      <div className="post_body_check_right">
                        <div className="post_body_check_right_h">Скидка 3%</div>
                        <div className="post_body_check_right_p">Ваша бонусная скидка</div>
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
            </div>
          </div>
        </div>
      </CabinetLayout>
    </>
  )
}

export default PostBody