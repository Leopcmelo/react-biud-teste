import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import showPw from '../img/0-log-in-shape@2x.png';
import Alert from 'react-s-alert';
import api from "../service/api";
import { login } from "../service/auth";
import '../views/css/login.css';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }
    constructor(props, context) {
        super(props, context);

        this.state = {
            hidden: true,
            password: "",
            description: ''
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = async e => {
        const { username, password } = this.state;
        e.preventDefault();
        try {
            const response = await api.post("/login_check", { username, password });
            login(response.data.token);
            this.props.history.push("/oportunidades");
            console.log(response)
        } catch (err) {
            Alert.error('Usuário ou senha incorretos', {
                position: 'top-right',
                beep: false,
                timeout: 3000,
                offset: 100
            })
            console.log(err.status)
            if (err.status === 400 || err.status === 401) {

            } else if (err.status === 500) {
                Alert.warning('Ocorreu um erro no servidor, tente novamente.', {
                    position: 'top-right',
                    beep: false,
                    timeout: 3000,
                    offset: 100
                })
            };
        }
    }
    render() {
        return (
            <div className="inner">
                <h1>Bem-vindo, Biuder!</h1>
                <form onSubmit={this.onSubmit} lang="pt-br" >
                    <div className="email">
                        <div className="rectangle">
                        </div>
                        <div className="login" id="email">
                            <input type="email" name="usarname" required placeholder="E-mail" className="inputLogin"
                                onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>
                    <Alert stack={{ limit: 3, spacing: 50 }} />
                    <div className="senha">
                        <input className="inputPassword" placeholder="Senha" name="password" minLength="6"
                            type={this.state.hidden ? "password" : "text"}
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <img onClick={this.toggleShow} src={showPw} className="imgPw" alt="Mostrar/Esconder Senha" />

                    </div>
                    <div className="loginbutton" >
                        <input type="submit" value="LOG IN" className="buttonLogin" />
                    </div>
                </form>
                <a href="/recuperarsenha" className="link"><p>Esqueceu sua senha? Clique aqui</p></a>
                <div className="loginbutton" >
                    <a href="/cadastramento">
                        <button className="cadastrarLogin" >COMECE AGORA</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);