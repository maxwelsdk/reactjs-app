import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../cadastro/cadastro.css'
import TextField from '@material-ui/core/TextField'
import { Card } from '@material-ui/core'
import logo from '../cadastro/imgs/logo.png'

const Cadastro = props => {

    // var usuario = new Usuario();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [usuario, setUsuario] = useState("");
    const [nome, setNome] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name)
        history.push(path)
    }

    function cadastro(email, senha) {
        console.log();
    }

    return (
        <div>
            <div>
                <img className="logo-login" alt='logo' src={logo}></img>
                <p className="nome" >Simple Job</p>
                <p className="slogan" >Uma maneira simplificada de trabalhar!</p>
            </div>
            <div className="card-login">
                <h1 className="title-login">Cadastrar</h1>
                <form noValidate autoComplete="off">

                    <TextField className="input-email" id="standard-basic" label="Nome" value={nome} onChange={text => setNome(text.target.value)} />
                    <div style={{ height: 30 }}></div>
                    <TextField className="input-email" id="standard-basic" label="Usuario" value={usuario} onChange={text => setUsuario(text.target.value)} />
                    <TextField className="input-pw" id="standard-basic" label="Email" value={email} onChange={text => setEmail(text.target.value)} />
                    <div style={{ height: 30 }}></div>
                    <TextField className="input-pw" type="password" id="standard-basic" label="Senha" value={senha} onChange={text => setSenha(text.target.value)} />
                    {/* <TextField className="input-pw" id="standard-basic" label="Confirmar Senha" value={confirmaSenha} onChange={text => setConfirmaSenha(text.target.value)} /> */}
                </form>
                <button className="btn-login" onClick={evt => cadastro()}>Cadastrar</button>
            </div>
        </div>
    )

}


export default Cadastro;