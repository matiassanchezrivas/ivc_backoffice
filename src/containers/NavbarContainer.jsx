import React from 'react';
import { connect } from 'react-redux';
import css from '../css/header.css'

const botones = ['Propiedades', 'Inmobiliarias', 'Inicio']

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <header id="header">
                <div className="whitebar sticky-wrapper is-sticky">
                    <div className="border-gradient">
                        <div className="container">
                            <div id="logo-sitio">
                                <a href="#" style={{ textDecoration: `none` }}>
                                    <div id="ba-logo" className="navbar-brand img-responsive" data-original-title="" title="">
                                    </div>
                                </a>
                            </div>
                            <div id="nombre-sitio">
                                <a href="http://disfrutemosba.buenosaires.gob.ar">
                                    <h1>Administrador IVC</h1>
                                </a>
                            </div>

                            <nav className="navbar navbar-default" role="navigation">
                                <div className="container">
                                    <div className="row back">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                                                <span className="sr-only">Cambiar navegación</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                        <div className="collapse navbar-collapse" id="main-nav">
                                            <ul className="nav navbar-nav navbar-right">
                                                {
                                                    botones.map((boton) => <li onClick={(event) => console.log(event)}><a href="#">{boton} </a></li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return ({
    })
}


const mapStateToProps = function (state) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

