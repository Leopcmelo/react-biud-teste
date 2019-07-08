import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './views/home';
import RecuperarSenha from './views/recuperarsenha';
import Cadastramento from './views/cadastramento';
import Oportunidades from './views/oportunidades';
import { isAuthenticated } from "./service/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastramento"  component={Cadastramento}  />
      
      <Route path="/recuperarsenha"  component={RecuperarSenha}/>
      
      <PrivateRoute path="/oportunidades" component={Oportunidades}/>
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;