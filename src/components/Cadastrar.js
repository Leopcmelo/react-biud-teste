import React, { Component } from 'react';
import imgPreview from '../img/0-criar-conta-a-fill-1-copy-2@2x.png'
import shape from '../img/0-log-in-shape@2x.png'
import MaskedInput from 'react-text-mask'
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
export default class Cadastrar extends Component {
    state = {
        PacoteAdobe: false,
        EdicaodeFotos: false,
        PlanejamentoDigital: false,
        PrototipacaodeAplicativos: false,
        Branding: false,
        ApresentacoesPPT: false,
        Impressos: false,
        Publicidade: false,
        Outros: false
    };
    constructor(props, imagemAdicionar) {
        super(props, imagemAdicionar);
        imagemAdicionar = imgPreview;
        this.state = { file: '', imagePreviewUrl: imagemAdicionar };
    }

    togglePacoteAdobe = () => {
        this.setState(prevState => ({
            PacoteAdobe: !prevState.PacoteAdobe,
        }));
    }
    toggleEdicaodeFotos = () => {
        this.setState(prevState => ({
            EdicaodeFotos: !prevState.EdicaodeFotos,
        }));
    }
    togglePlanejamentoDigital = () => {
        this.setState(prevState => ({
            PlanejamentoDigital: !prevState.PlanejamentoDigital,
        }));
    }
    togglePrototipacaodeAplicativos = () => {
        this.setState(prevState => ({
            PrototipacaodeAplicativos: !prevState.PrototipacaodeAplicativos,
        }));
    }
    toggleBranding = () => {
        this.setState(prevState => ({
            Branding: !prevState.Branding,
        }));
    }
    toggleApresentacoesPPT = () => {
        this.setState(prevState => ({
            ApresentacoesPPT: !prevState.ApresentacoesPPT,
        }));
    }
    toggleImpressos = () => {
        this.setState(prevState => ({
            Impressos: !prevState.Impressos,
        }));
    }
    togglePublicidade = () => {
        this.setState(prevState => ({
            Publicidade: !prevState.Publicidade,
        }));
    }
    toggleOutros = () => {
        this.setState(prevState => ({
            Outros: !prevState.Outros,
        }));
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    onSubmit = (e) => {
        e.preventDefault();

        let data = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                data.push(key);
            }
        }

        console.log(data);

        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
                phone: e.target.telefone.value,
                name: e.target.name.value,
                photo: e.target.foto.value,
                skills: data,
                cpf: e.target.cpf.value,
                bankName: e.target.banco.value,
                agency: e.target.agencia.value,
                account: e.target.conta.value
            })

        }).then(function (response) {
            console.log(response)
            if (response.status === 201) {
                Alert.success('Cadastro realizado com sucesso, faça login para prosseguir', {
                    position: 'top-right',
                    beep: false,
                    onShow: function () {
                        console.log('aye!')
                    },
                    timeout: 3000,
                    offset: 100
                })
                console.log(response.status);

            } else {
                Alert.warning('Ocorreu um erro ao cadastrar.', {
                    position: 'top-right',
                    beep: false,
                    timeout: 3000,
                    offset: 100
                });
            }
        });
    }
    render() {
        let { imagePreviewUrl } = this.state;

        if (imagePreviewUrl) {

        }
        return (
            <div>
                <Alert stack={{ limit: 3, spacing: 50 }} />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <p>Qual é o seu email?</p>
                        <input type="email" name="email" required placeholder="E-mail" className="inputCadastrar" />
                        <p className="comentario">Nós vamos confirmar esse e-mail depois.</p><br></br>
                    </div>
                    <div>
                        <p>Crie uma senha</p>
                        <input type="password" required placeholder="Senha" name="password" minLength="6" className="inputCadastrar" />
                        <img src={shape} className="imgSenha" alt="Ver senha" />
                        <p className="comentario">Use pelo menos 6 caracteres.</p><br></br>
                    </div>
                    <div>
                        <p>Qual é o seu celular?</p>
                        <MaskedInput placeholder="(99) 99999-9999" className="inputCadastrar" required name="telefone"
                            mask={['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        /><br></br>
                    </div>
                    <div>
                        <p>Como você quer ser chamado?</p>
                        <input type="text" required className="inputCadastrar" name="name" />
                        <p className="comentario">Isso vai aparecer no seu perfil BIUD.</p><br></br>
                    </div>

                    <div>
                        <p>Que tal nos enviar uma foto sua?</p>
                        <div id="foto">
                            <div className="image-upload">
                                <label htmlFor="fileInput">
                                    <img src={imagePreviewUrl} className="imgupload" alt="" />
                                </label>
                                <div className="imgPreupload">
                                    <input type="file" id="fileInput" onChange={(e) => this._handleImageChange(e)} name="foto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Quais as suas habilidades?</p>
                        <div className="group" id="habilidades">
                            <ul className="ks-cboxtags">
                                <li><input type="checkbox" id="checkboxOne" checked={this.state.PacoteAdobe} onChange={this.togglePacoteAdobe} value="Pacote Adobe" /><label htmlFor="checkboxOne">Pacote Adobe</label></li>
                                <li><input type="checkbox" id="checkboxTwo" checked={this.state.EdicaodeFotos} onChange={this.toggleEdicaodeFotos} value="Edição de Fotos" /><label htmlFor="checkboxTwo">Edição de Fotos</label></li>
                                <li><input type="checkbox" id="checkboxThree" checked={this.state.PlanejamentoDigital} onChange={this.togglePlanejamentoDigital} value="Planejamento Digital" /><label htmlFor="checkboxThree">Planejamento Digital</label></li>
                                <li><input type="checkbox" id="checkboxFour" checked={this.state.PrototipacaodeAplicativos} onChange={this.togglePrototipacaodeAplicativos} value="Prototipação de Aplicativos" /><label htmlFor="checkboxFour">Prototipação de Aplicativos</label></li>
                                <li><input type="checkbox" id="checkboxFive" checked={this.state.Branding} onChange={this.toggleBranding} value="Branding" /><label htmlFor="checkboxFive">Branding</label></li>
                                <li><input type="checkbox" id="checkboxSix" checked={this.state.ApresentacoesPPT} onChange={this.toggleApresentacoesPPT} value="Apresentações PPT" /><label htmlFor="checkboxSix">Apresentações PPT</label></li>
                                <li><input type="checkbox" id="checkboxSeven" checked={this.state.Impressos} onChange={this.toggleImpressos} value="Impressos" /><label htmlFor="checkboxSeven">Impressos</label></li>
                                <li><input type="checkbox" id="checkboxEight" checked={this.state.Publicidade} onChange={this.togglePublicidade} value="Publicidade" /><label htmlFor="checkboxEight">Publicidade</label></li>
                                <li><input type="checkbox" id="checkboxNine" checked={this.state.Outros} onChange={this.toggleOutros} value="Outros" /><label htmlFor="checkboxNine">Outros</label></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Última e melhor parte! Informe-nos seus dados para recebimento</p>
                        <p>CPF</p>
                        <MaskedInput placeholder="000.000.000-00" className="inputCadastrar" required name="cpf"
                            mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                        />
                        <p>Banco</p>
                        <input type="text" placeholder="Comece a digitar" required className="inputCadastrar" name="banco" />
                        <div>
                            <div className="Metade">
                                <p>Agência</p>
                                <input type="number" placeholder="1234" required className="inputCadastrar1" name="agencia" />
                            </div>
                            <div className="Metade">
                                <p>Conta com dígito</p>
                                <input type="number" required placeholder="1234-5" className="inputCadastrar" name="conta" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="FINALIZAR" className="buttonCadastrar" />
                </form>
            </div>
        )
    }
}