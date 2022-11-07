import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import CabinetLayout from './Cabi/CabinetLayout';
import OrderBox from './OrderBox'

const FaqBody = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <>

            <CabinetLayout>
                <div className="FaqBody">
                                <div className="faq_body_box">
                                    <div className="faq_body_name">FAQ — часто задаваемые вопросы  </div>
                                    <div className='d-flex align-items-center'>
                                        <a href='' className="ord_head_a_1">Главная </a>
                                        <div className="ord_head_a_2">FAQ — часто задаваемые вопросы  </div>
                                    </div>

                                    <div className="faq_body_inp_box">
                                        <input placeholder='Умный поиск по справочнику' type="text" className="faq_body_inp" />
                                        <div className="faq_body_inp_btn"><a href=""><button>Поиск</button></a></div>
                                    </div>
                                    <div className="faq_body_h">Заказы </div>


                                    <Accordion flush open={open} toggle={toggle}>
                                        <AccordionItem>
                                            <AccordionHeader targetId="1">
                                                <div className="faq_body_h_2">С чего начать работу эксперту? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>
                                                <img src="/img/faq_1.png" alt="" className="faq_body_img" />
                                                <div className="faq_body_p">
                                                    Прикрепите примеры работ и заполните информацию о себе, чтобы повысить доверие заказчиков и увеличить шансы на выбор вас исполнителем.
                                                </div>
                                                <div className="faq_body_p">
                                                    Для поиска заказов перейдите в раздел «Лента заказов», который находится в верхней панели слева.
                                                </div>
                                                <div className="faq_body_p">
                                                    Рядом с кнопкой поиска нажмите «Расширенный» и установите галочку напротив пункта «Моя специализация». После этого нажмите на кнопку «Поиск».
                                                </div>
                                                <div className="faq_body_p">
                                                    Заказы будут отсортированы только по указанным вами специализациям.
                                                </div>
                                                <img src="/img/faq_2.png" alt="" className="faq_body_img" />
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="2">
                                                <div className="faq_body_h_2">Как разместить заказ? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="2">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="3">
                                                <div className="faq_body_h_2">Где найти мой заказ? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="3">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="4">
                                                <div className="faq_body_h_2">Как выбрать исполнителя? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="4">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="5">
                                                <div className="faq_body_h_2">Что такое приватный заказ? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="5">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="6">
                                                <div className="faq_body_h_2">Как загрузить файл с готовой работой?</div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="6">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="7">
                                                <div className="faq_body_h_2">Как оплатить заказ? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="7">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="8">
                                                <div className="faq_body_h_2">Как отправить заказ на доработку? </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="8">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="9">
                                                <div className="faq_body_h_2">Что такое гарантийный срок?  </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="9">
                                                <div className="faq_body_p">
                                                    Для того чтобы начать работу в качестве эксперта, на странице вашего профиля необходимо указать специализации, по которым вы готовы выполнять заказы.
                                                </div>

                                            </AccordionBody>
                                        </AccordionItem>

                                    </Accordion>

                                </div>
                </div>
            </CabinetLayout>

        </>
    )
}

export default FaqBody