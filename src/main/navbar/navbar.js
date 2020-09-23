import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css'


const Navbar = props => (
    <div className="App">
        <nav className="base-navbar"><div>
            <p className="nome-empresa"><img alt='logo' src={logo}></img>NomeEmpresa</p>
        </div>
            <button className="navbar-button btn-text">cadastre-se</button>
            <div>
                <button className="navbar-button2 btn-text">login</button>
            </div>
        </nav>
    </div>
);

export default Navbar;