import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from '../Login/login';
import Index from '../Index';
import Productosbuscar from "../productos/inicio"


export default function AppRouter(){
    return(
        <Router>
            <Switch>

                <Route exact path={['/login']} component={Login} /> 
                <Route exact path={['/']} component={Login} /> 
                <Route exact path={['/Index']} component={Index} /> 
                <Route exact path={['/productos']} component={Productosbuscar} /> 
                <Route exact path={'*'} component={()=>(
                    <h1 style={{marginTop:500,background:"red"}} >404 <br/>Pagina no Encontrada </h1>
                    
                )}
                />
                
              
            </Switch>
        </Router>
    );

}

