import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    // <div className = "d-flex align-items-center flex-column" style={{width: "100%"}}>
    <div style={{width: "100%"}}>
        <div className="d-flex flex-row">
            <div className="box mt-auto" style={{boxSizing: "content-box"}}></div>
            <div className="app ml-3">
                <h1 className="text-danger">My Account</h1>
                <nav className="navbar navbar-expand-sm navbar-light bg-color rounded">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav col-12">
                        <li className="nav-item active">
                            <Link to="/main">
                                <a className="nav-link" href="">Главная <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/about'>
                                <a className="nav-link ml-3" href="">О нас <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/contacts'>
                                <a className="nav-link ml-3" href="">Контакты <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <a className="nav-link ml-3" href="">Счета <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <a className="nav-link ml-3" href="">Платежи <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <a className="nav-link ml-3" href="">Переводы <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <a className="nav-link ml-3" href="">Заявка <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <a className="nav-link ml-3" href="">Купля/продажа валюты <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Header;
