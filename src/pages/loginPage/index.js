import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../loginPage/login.css'
import TextField from '@material-ui/core/TextField'
import { Card } from '@material-ui/core'
import logo from '../loginPage/imgs/logo.png'

const Login = props => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name)
        history.push(path)
    }

    async function testeBack() {
        try {
            let retorno = await fetch("http://localhost:5000/users", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            //let json = await retorno.json();
            return retorno;
            console.log(retorno);
        } catch (error) {
            console.error(error);
        }

    }

    function login(email, senha) {
        if (email == validaLogin.loginCorreto && senha == validaLogin.senhaCorreto) {
            if (validaLogin.perfil == "cliente") {
                routeChange("cliente")
            }
            else if (validaLogin.perfil == "profissional") {
                routeChange("profissional")
            }
        }
        else {
            alert("usuário ou senha invalido")
        }
    }

    return (
        <div className="body" >
            <div>
                <img className="logo-login" alt='logo' src={logo}></img>
                <p className="nome" >Simple Job</p>
                <p className="slogan" >Uma maneira simplificada de trabalhar!</p>
            </div>
            <div className="card-login">
                <h1 className="title-login">Login</h1>
                <form noValidate autoComplete="off">

                    <TextField className="input-email" id="standard-basic" label="Email" value={email} onChange={text => setEmail(text.target.value)} />
                    <TextField className="input-pw" type="password" id="standard-basic" label="Senha" value={senha} onChange={text => setSenha(text.target.value)} />
                </form>

                <button className="btn-login" onClick={evt => login(email, senha)}>Login</button>
                <p className="signup"><a href="/cadastro">ainda nao tem cadastro? cadastre-se</a></p>
            </div>
        </div>
    )

}
let validaLogin = {
    loginCorreto: "teste",
    senhaCorreto: "12345",
    perfil: "cliente"
}

export default Login;