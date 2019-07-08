import React, { Component } from 'react';
import Cadastrar from '../components/Cadastrar.js'
import './css/cadastramento.css';
import marca from '../img/0-criar-conta-a-marca@2x.png'

document.body.style.margin = "0";
export default class Cadastramento extends Component {
    state = {
    }

    render() {
        return (
            <div className="bg2">
                <div className="caption2">
                    <div className="inner2"><br/>
                        <img src={marca} className="imgLogoCadastrar" alt="" />
                        <div>
                            <h1>Criar Conta</h1>
                        </div>
                        <div>
                            <Cadastrar />
                        </div></div>
                </div>
            </div>
        )
    }
}