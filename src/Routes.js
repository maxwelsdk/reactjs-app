import React from 'react';
import { Switch, Route} from "react-router-dom";
import Cadastro from "./pages/cadastro/index"
import Login from './pages/loginPage/index';
import HomeCliente from './pages/homeCliente/index';
import HomeProf from './pages/homeProf/index';
import LandingPage from './pages/landingPage/index'

function Routes(){
    return(
        <Switch>
            <Route exact path ='/cliente' component={HomeCliente}/>
            <Route exact path ='/profissional' component={HomeProf}/>
            <Route exact path ='/cadastro' component={Cadastro}/>
            <Route exact path ='/login' component={Login}/>
            <Route exact path ='/landing' component={LandingPage}/>
            <Route exact path ='/' component={LandingPage}/>
        </Switch>
    )
}
export default Routes;
