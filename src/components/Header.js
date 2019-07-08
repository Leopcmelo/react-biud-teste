import React, { Component } from 'react';
import '../views/css/header.css'
import notificacoes from '../img/6-notificaes-profile@2x.png'
import dashboardmarca from '../img/1-dashboard-marca@2x.png'
import dashboardchat from '../img/1-dashboard-elipse@2x.png'
import cronograma from '../img/3-oportunidades-cronograma@2x.png'
import meusjobsoportunidade from '../img/3-oportunidades-meus-jobs@2x.png'
import meusjobsoportunidadenot from '../img/2-meus-jobs-f-notifica347343o@2x.png'
import notificacoescone from '../img/6-notificaes-355cone-1@2x.png'
import logoutImg from '../img/logout_3622.png'
import { logout } from "../service/auth";

export default class header extends Component {
    state = {
    }

    render() {
        return (
            <header className="header">
                <div className="header-left">
                    <a href="/oportunidades" className="aMenu"><img src={dashboardmarca} className="marcaHeader" alt="Logomarca" /></a>
                </div>
                <div className="header-right">
                    <a href="/oportunidades" className="aMenu"><img src={notificacoescone} className="iconeMenu" alt="Home"/></a>
                    <a href="/oportunidades" className="aMenu"><img src={meusjobsoportunidadenot} className="iconeMenu" alt="Notificações"/></a>
                    <a href="/oportunidades" className="aMenu" ><img src={meusjobsoportunidade} className="iconeMenu" alt="Jobs"/></a>
                    <a href="/oportunidades" className="aMenu"><img src={cronograma} className="iconeMenu" alt="Agenda"/></a>
                    <a href="/oportunidades" className="aMenu1"><img src={notificacoes} className="iconePerfil" alt="Perfil"/></a>
                    <a href="/oportunidades" className="aMenu1"><img src={dashboardchat} className="iconePerfil"alt="Dashboards"/></a>
                    <a href="/" onClick={logout()} className="aMenu"><img src={logoutImg} className="iconeMenu" alt="Logout" /></a>
                </div>

            </header>
        )
    }
}

