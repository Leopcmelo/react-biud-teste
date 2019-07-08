import React, { useState } from 'react';
import '../views/css/oportunidades.css';
import imageServico from '../img/2-meus-jobs-a-papelaria@2x.png'
import noLimite from '../img/2-meus-jobs-d-combined-shape@2x.png'
import midiasdigitais from '../img/4-chat-m355dias-digitais-1@2x.png'
import estrategia from '../img/5-perfil-estrat351gia-1@2x.png'
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const Oportunidades = ({ oportunidades }) => {

    function handleClick(e) {

        console.log(e);

        fetch('http://localhost:8000/opportunity/'+e.id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_oportunidade: e.id,
                job: email.biuder
            })

        }).then(function (response) {
            console.log(response)
            if (response.status === 200) {
                Alert.success('Você pegou esse oportunidade, para acompanhá-la visite a área "Jobs', {
                    position: 'top-right',
                    beep: false,
                    onShow: function () {
                        console.log('aye!')
                    },
                    timeout: 3000,
                    offset: 100
                })
                window.location.reload();
                console.log(response.status);

            } else {
                Alert.warning('Ocorreu um erro ao pegar essa oportunidade', {
                    position: 'top-right',
                    beep: false,
                    timeout: 3000,
                    offset: 100
                });
            }
        });
    }

    const [count, setCount] = useState(0);
    var id_biuder;
    return (
        <div>
            <div>
                {oportunidades.map(oportunidade => (
                    <div> {oportunidade.biuder === null ? /* COMENT: VERIFICA SE A OPORTUNIDADE JÁ FOI PEGA */
                        <div className="card">
                            <div className="card-body">
                                <div className="divCard-1">
                                    <p className="card-text-continuos"> {oportunidade.category} </p>
                                    <p className="card-text-empresa"> • {oportunidade.company}</p>
                                    <div className="prazoEntrega">
                                        {oportunidade.id > 1 ? (<p className="textoOportunidade"> ENTREGA EM {oportunidade.deadline} DIAS</p>)
                                            : (<p className="textoOportunidade"> ENTREGA EM {oportunidade.deadline} DIA</p>) /* COMENT: Diferencia impressão de "dia" ou "dias" */}
                                    </div>
                                </div>

                                <div className="divCard-2">
                                    <p className="rscifrao">R$</p>
                                    <p className="valorOportunidade">{oportunidade.price}</p>
                                    <button className="botaoPegar" onClick={handleClick.bind(this, oportunidade)}>PEGAR</button>
                                </div>
                                <div className="divCard-2">
                                    {oportunidade.category === 'papelaria' ? (<img className="papelaria" src={imageServico} alt="Papelaria" />)
                                        : (oportunidade.category === 'midiasdigitais' ? (<img className="papelaria" src={midiasdigitais} alt="Mídias Digitais" />)
                                            : (<img className="papelaria" src={estrategia} alt="Estratégia" />)
                                        )}
                                    <Alert stack={{ limit: 3, spacing: 50 }} />
                                </div>
                            </div>
                        </div>
                        : (oportunidade.biuder === email.biuder ? () => setCount(count + 1, console.log(count)) : <div className="no-display"></div>)}<br /></div>
                ))
                }  {console.log(count) > 4 ? /* COMENT: Verifica se o biuder tem >4 oportunidades para fazer */
                    <div className="excedente">
                        <div className="full-content">
                            <img src={noLimite} alt="No limite" />
                            <h1>No Limite!</h1>
                            <p>Finalize seus jobs e debloqueie novas oportunidades</p>
                        </div>
                    </div> : <div></div>
                }
            </div>
        </div>
    )
}

export default Oportunidades
