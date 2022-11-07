import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';





const OrderQuestion = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    return (
        <>
            <div className="OrderQuestion">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ord_ques_name">Популярные вопросы</div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                            <img src="/img/order_question.png" alt="" className="ord_ques_img" />
                        </div>
                        <div className="col-7">
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1"><div className="ord_ques_h">Как выбрать автора?</div></AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="ord_ques_p">
                                            После размещения заказа в ленте, вам начнут поступать предложения от экспертов с вопросами, комментариями и стоимостью.
                                            Чтобы не ошибиться с выбором специалиста, зайдите в его профиль. Посмотрите, как он заполнен, что автор пишет о себе, добавил ли он портфолио. Обратите особое внимание на отзывы.
                                            Затем обговорите все условия с понравившимся экспертом и, если вас все устроит, нажмите кнопку «Выбрать исполнителя».
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2"><div className="ord_ques_h">Проверяются ли работы на плагиат?
                                    </div></AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className="ord_ques_p">
                                            Все работы проверяются по системам антиплагиата, если этого требует заказчик. Поэтому данный вопрос нужно сразу обговаривать с экспертом. Не забудьте сказать о том, какой процент оригинальности вам нужен. Если вы не укажете приемлемую уникальность, по умолчанию она будет 35%.
                                            На сайте доступны такие системы проверки, как: Антиплагиат.ру, eTXT, Advego, Антиплагиат.ВУЗ.
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3"><div className="ord_ques_h">Есть ли гарантии на работу?
                                    </div></AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <div className="ord_ques_p">
                                            После выполнения работы заказчик может подать заявку на корректировку, если его что-то не устраивает. Гарантия заказа равна одному календарному году. Автор обязан исправить работу, даже если срок блокировки заказа уже прошел, но при условии, что задание не изменялось.
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="4"><div className="ord_ques_h">Как можно оплатить заказ?</div></AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <div className="ord_ques_p">
                                            Чтобы оплатить заказ, вам необходимо пополнить баланс в личном кабинете. Это можно сделать с помощью банковской карты, электронных кошельков Яндекс.Деньги, Qiwi и Payeer, а также всех мобильных операторов России.
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="5"><div className="ord_ques_h">Есть ли у вас скидки?

                                    </div></AccordionHeader>
                                    <AccordionBody accordionId="5">
                                        <div className="ord_ques_p">
                                            На сайте действует система промокодов. Вы можете получить скидку от 10% на заказ, воспользовавшись ими. Следите за обновлениями на сайте и в соцсетях, чтобы не пропустить новые акции.
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default OrderQuestion