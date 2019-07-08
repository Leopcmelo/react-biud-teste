import React, { Component } from 'react';
import './css/recuperarsenha.css';
import marcaBiud from '../img/0-log-in-marca-2@2x.png'

document.body.style.margin = "0";
export default class RecuperarSenha extends Component {
    state = {
    }

    render() {
        return (
            <div className="bg1">
                <div className="captionrs">
                    <img src={marcaBiud} alt="logo" className="imgLogo"></img>
                    <div className="innerrs">
                        <p>Insira o e-mail que você usou pra criar a sua conta. Vamos te enviar as instruções para recuperar a sua senha nele, ok?</p>
                        <input type="email" required placeholder="E-mail" className="inputLoginrs" />
                        <input type="submit" value="RECEBER EMAIL" className="buttonLoginrs" />
                        <a href="/"><button className="buttonVoltarrs">VOLTAR</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

