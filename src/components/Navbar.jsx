import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const [navbar, setNavbar] = useState(false);


    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);


    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''} ${location.pathname === '/Servic' && 'active'} ${location.pathname === '/Orders' && 'active'} ${location.pathname === '/Experts' && 'active'} ${location.pathname === '/Shop' && 'active'} ${location.pathname === '/Directory' && 'active'} ${location.pathname === '/FAQ' && 'active'} ${location.pathname === '/Contact' && 'active'} ${location.pathname === '/OrderIn' && 'active'} ${location.pathname === '/orderin' && 'active'}  ${location.pathname === '/ExpertInfo' && 'active'}  ${location.pathname === '/Questions' && 'active'} ${location.pathname === '/QuestionsIn' && 'active'}   ${location.pathname === '/DirectoryIn' && 'active'} ${location.pathname === '/spravocnik' && 'active'}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Link to='/' className={`nav_logo ${location.pathname === '/' ? 'active' : ''}`}>Logo</Link>
                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-between">
                            <Link to='/Servic' className={`nav_a ${location.pathname === '/Servic' ? 'active' : ''}`}>Услуги</Link>
                            <Link to='/Orders' className={`nav_a ${location.pathname === '/Orders' ? 'active' : ''}`}>Заказы</Link>
                            <Link to='/Experts' className={`nav_a ${location.pathname === '/Experts' ? 'active' : ''}`}>Эксперты</Link>
                            <Link to='/Shop' className={`nav_a ${location.pathname === '/Shop' ? 'active' : ''}`}>Магазин</Link>
                            <Link to='/Directory' className={`nav_a ${location.pathname === '/Directory' ? 'active' : ''}`}>Справочник</Link>
                            <Link to='/Questions' className={`nav_a ${location.pathname === '/Questions' ? 'active' : ''}`}>Вопросы</Link>
                            <Link to='/FAQ' className={`nav_a ${location.pathname === '/FAQ' ? 'active' : ''}`}>FAQ</Link>
                            <Link to='/Contact' className={`nav_a ${location.pathname === '/Contact' ? 'active' : ''}`}>Контакты</Link>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-between">
                            <Link to='/Registration' className={`nav_a ${location.pathname === '/Registration' ? 'active' : ''}`}>Авторизация</Link>
                            <a href="/" className="nav_a_img"><img src="/img/prof_out.svg" alt="" className="nav_img" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar