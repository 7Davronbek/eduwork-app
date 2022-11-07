import React from 'react'

const AuthorInfo = () => {
    return (
        <>
            <div className="AuthorInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="author_info_name">Стать автором студенческих работ</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <img src="/img/author_info.png" alt="" className="author_info_img" />
                        </div>
                        <div className="col-6">
                            <div className="author_info_p">
                                На сайте Студворк студент может найти эксперта по любому учебному предмету и заказать консультацию по интересующему вопросу. Чтобы наши заказчики всегда получали качественную помощь, мы ежедневно разыскиваем новых экспертов. Нам требуются специалисты в любой области: математика, физика, химия, история, психология и другие. В проекте Студворк уже работают научные сотрудники, аспиранты, преподаватели вузов, доктора и кандидаты наук. Присоединяйтесь и вы!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorInfo