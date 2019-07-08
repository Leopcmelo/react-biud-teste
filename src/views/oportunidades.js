import React, { Component } from 'react';
import Header from '../components/Header'
import Oportunidade from '../components/Oportunidades'
import './css/oportunidades.css';

document.body.style.margin = "0";
export default class Oportunidades extends Component {
    state = {
        oportunidades: []
    }
    componentDidMount() {
        fetch('http://localhost:8000/opportunity/list')
            .then(res => res.json())
            .then((data) => {
                this.setState({ oportunidades: data })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="pagina-oportunidades">
                    <div className="lista-oportunidades">
                        <h1>Oportunidades</h1>
                        <Oportunidade oportunidades={this.state.oportunidades} />
                    </div>
                </div>
            </div>
        )
    }
}