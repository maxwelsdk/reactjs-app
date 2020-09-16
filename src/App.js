import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import './nav-bar/Navbar.css'

function App() {
  const navbar = (
    <div className="App">
      <header>
      </header>
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

  return navbar;
}

export default App;
