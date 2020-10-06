import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import '../cadastro/cadastro.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import logo from '../cadastro/imgs/logo.png'

const Cadastro = props =>{
    
    const [ nome, setNome] = useState("");
    const [ usuario, setUsuario] = useState("");
    const [ senha, setSenha] = useState("");
    const [ senhaC, setSenhaC] = useState("");
    const [ email, setEmail] = useState("");
    const [perfil, setPerfil] = useState("");

    const history =  useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name)
        history.push(path)
    }
    
    
      const handleChange = (event) => {
        const name = event.target.value;
        setPerfil(name);
        
      };

    return(
        
        <div className="body0"  >
            <div className="body-signup">
                <img className="logo-login" alt='logo' src={logo}></img>
                <p className="nome" >Simple Job</p>
                <p className="slogan1" >Uma maneira simplificada de trabalhar!</p>
            </div>
            <div className="card-signup">
                <h1 className="title-signup">Crie sua conta</h1>
                <h5 className="text-signup">É rápido e totalmente gratuito!</h5>

                <form className="input-form" noValidate autoComplete="off">
            
                 <TextField className="input-nome" id="standard-basic" label="Nome" value={nome} onChange={text => setNome(text.target.value)} />
                 <TextField className="input-usuarioa" id="standard-basic" label="Usuário" value={usuario} onChange={text => setUsuario(text.target.value)} />
                 <TextField className="input-emaila" id="standard-basic" label="Email" value={email} onChange={text => setEmail(text.target.value)} />
                 <TextField className="input-senhaa" type="password" id="standard-basic" label="Senha" value={senha} onChange={text => setSenha(text.target.value)} />
                 <TextField className="input-senhaC" type="password" id="standard-basic" label="Confirme sua senha" value={senhaC} onChange={text => setSenhaC(text.target.value)} />
                 <Select  className="input-perfil" id="standard-basic" native value={perfil} onChange={handleChange}>
                    <option >Selecione um perfil</option>
                    <option value={"Cliente"}>Cliente</option>
                    <option value={"Profissional"}>Profissional</option>

                 </Select>
                </form>

                <button className="btn-logins" onClick = {console.log(perfil)}>criar conta</button>
                <p className="link-signup"><a href="http://localhost:3000/login">Já possui cadastro? Faça login</a></p>
            </div>
        </div>
    )
}
export default Cadastro;