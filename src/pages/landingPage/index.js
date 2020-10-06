import React from 'react'
import logo from '../landingPage/imgs/logo.png'
import img1 from '../landingPage/imgs/img_service.png'
import img2 from '../landingPage/imgs/img_client.png'
import deal from '../landingPage/imgs/deal.png'
import work from '../landingPage/imgs/worker.png'
import galery from '../landingPage/imgs/galery.png'
import profile from '../landingPage/imgs/profile.png'
import facebook from '../landingPage/imgs/facebook.png'
import twitter from '../landingPage/imgs/twitter.png'
import whats from '../landingPage/imgs/whats.png'
import instagram from '../landingPage/imgs/instagram.png'
import '../landingPage/landingPage.css'
import {useHistory} from 'react-router-dom'

const LandingPage = props =>{ 

    const history =  useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name)
        history.push(path)
    }

    return(
        <div>
            <nav className="base-navbar">
                <div>
                <img className="logo" alt='logo' src={logo}></img>
                 <p className="nome-empresa">Simple Job</p>
                </div>
                <button className="navbar-button btn-text" onClick ={evt => routeChange("cadastro")}>cadastre-se</button>
                <button className="navbar-button2 btn-text" onClick ={evt => routeChange("login")} >login</button>
            </nav>
            <div className="body-1"> 
                <h1 className="title-1" >Anuncie seus serviços de forma prática e rápida</h1>
                <p className="bodytext-1"> Tempor ad fugiat officia aute mollit esse pariatur dolore Lorem consequat anim incididunt aute velit. Cillum elit laboris ipsum do sunt esse excepteur cupidatat commodo. <br/>
                <br/>Aliquip anim aute nulla ut aliquip dolore dolor quis anim enim in anim cupidatat id. Nulla exercitation nostrud ea voluptate est reprehenderit aliqua dolor non consequat excepteur fugiat. Fugiat dolore voluptate ea voluptate Lorem adipisicing irure cillum eiusmod reprehenderit eu cillum.</p>
                <button className="btn-signup1" onClick ={evt => routeChange("cadastro")}>cadastre-se</button>
                <img className="imgbody-1" alt='prof-img' src={img1} ></img>
            </div>
            <div className="body-2">
                <h1 className="title-2" >Busque profissionais que atendam as suas necessidades</h1>
                <p className="bodytext-2"> Tempor ad fugiat officia aute mollit esse pariatur dolore Lorem consequat anim incididunt aute velit. Cillum elit laboris ipsum do sunt esse excepteur cupidatat commodo. <br/>
                <br/>Aliquip anim aute nulla ut aliquip dolore dolor quis anim enim in anim cupidatat id. Nulla exercitation nostrud ea voluptate est reprehenderit aliqua dolor non consequat excepteur fugiat. Fugiat dolore voluptate ea voluptate Lorem adipisicing irure cillum eiusmod reprehenderit eu cillum.</p>
                <button className="btn-signup2" onClick ={evt => routeChange("cadastro")}>cadastre-se</button>
                <img className="imgbody-2" alt='client-img' src={img2} ></img>
            </div> 
            <div className="body-3">
            <img className="icon-1" alt='deal' src={deal}></img>
            <img className="icon-2" alt='work' src={work}></img>
            <img className="icon-3" alt='profile' src={profile}></img>
            <img className="icon-4" alt='galery' src={galery}></img>

            <h1 className="icon-title1">Negocie o serviço sem sair de casa</h1>
            <h1 className="icon-title2">Anuncie serviços de maneira rápida</h1>
            <h1 className="icon-title3">Saiba competências do profissional </h1>
            <h1 className="icon-title4">Visualize/Divulgue trabalhos anteriores </h1>     

            <p className="text-icon1">Consequat ipsum dolore nisi non nisi et sint dolore excepteur quis amet esse consequat. Cupidatat Lorem tempor mollit veniam labore irure nisi officia ad sint laborum excepteur ut. Proident occaecat esse ad ex.</p>       
            <p className="text-icon2">Consequat ipsum dolore nisi non nisi et sint dolore excepteur quis amet esse consequat. Cupidatat Lorem tempor mollit veniam labore irure nisi officia ad sint laborum excepteur ut. Proident occaecat esse ad ex.</p>       
            <p className="text-icon3">Consequat ipsum dolore nisi non nisi et sint dolore excepteur quis amet esse consequat. Cupidatat Lorem tempor mollit veniam labore irure nisi officia ad sint laborum excepteur ut. Proident occaecat esse ad ex.</p>       
            <p className="text-icon4">Consequat ipsum dolore nisi non nisi et sint dolore excepteur quis amet esse consequat. Cupidatat Lorem tempor mollit veniam labore irure nisi officia ad sint laborum excepteur ut. Proident occaecat esse ad ex.</p>           
            <footer className="footer">
                <p className="footer-text">Simple Job Ltda. 2020 | Todos os direitos reservados</p>
                <img className="facebook" alt='facebook' src={facebook}></img>
                <img className="twitter" alt='twitter' src={twitter}></img>
                <img className="whats" alt='whats' src={whats}></img>
                <img className="instagram" alt='instagram' src={instagram}></img>

            </footer>
            </div>
        </div>
    
    )
}
export default LandingPage;