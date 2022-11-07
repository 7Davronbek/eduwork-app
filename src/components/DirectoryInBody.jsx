import React from 'react'
import { Link } from 'react-router-dom'
import OrderBox from './OrderBox'

const DirectoryInBody = () => {
    return (
        <>
            <div className="DirectoryInBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                        <div className="col-9">
                            <div className="direc_in_body_box">
                                <div className="direc_in_body_name">Как искать работу за границей? </div>
                                <div className='d-flex align-items-center'>
                                    <a href='' className="ord_head_a_1">Главная </a>
                                    <a href='' className="ord_head_a_1">Справочник </a>
                                    <div className="ord_head_a_2">Как искать работу за границей?   </div>
                                </div>

                                <div className="direc_in_body_inp_box">
                                    <input placeholder='Умный поиск по справочнику' type="text" className="direc_in_body_inp" />
                                    <div className="direc_in_body_inp_btn"><a href=""><button>Поиск</button></a></div>
                                </div>
                                <div className="direc_in_body_h">Содержание</div>
                                <div className="direc_in_body_p">1.С чего начать </div>
                                <div className="direc_in_body_p">2. Уровень владения иностранным языком  </div>
                                <div className="direc_in_body_p">3.Образование  </div>
                                <div className="direc_in_body_p">4.Предпочтения  </div>

                                <div className="direc_in_body_text_h">С чего начать</div>
                                <div className="direc_in_body_text_p">Перед тем как начинать поиск работы за границей, тщательно изучите свои возможности и желания. Обратите внимание на эти пункты, чтобы лучше понимать, какие вакансии вам подойдут:</div>
                                <div className="direc_in_body_text_h">Уровень владения иностранным языком</div>
                                <div className="direc_in_body_text_p">Определите свой уровень владения иностранным языком, чтобы понимать, на какую специальность в дальнейшем вы сможете рассчитывать. Чтобы узнать свой уровень, можно пройти официальные тесты, которые используют во время сдачи международных экзаменов.</div>
                                <div className="direc_in_body_text_h">Образование</div>
                                <div className="direc_in_body_text_p">Не забывайте учитывать уровень своего образования. За границей могут быть другие правила получения степени бакалавра и магистерской степени, поэтому перед выбором страны, в которой хотите работать – изучите все особенности. Зарубежные работодатели могут отказать в приеме на работу, если документ об образовании не подходит под стандарты выбранного государства.</div>
                                <div className="direc_in_body_text_h">Предпочтения </div>
                                <div className="direc_in_body_text_p">Когда вы изучили всю информацию по теме и учли все формальности, приступайте к анализу личных предпочтений. Подумайте, какая страна привлекает вас наиболее всего. От этого будет зависеть, на аких орталах вы займетесь поиском работы. Учитывайте условия и уровень жизни в выбранной стране, в зависимости от своих желаний и возможностей. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectoryInBody