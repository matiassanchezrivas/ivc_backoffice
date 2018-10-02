import React from 'react';
import { connect } from 'react-redux';
import css from '../css/login.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//import css2 from '../css/materialize.css'

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
            <div class="container login">
                <div class="row">
                    <div class="login-wrapper">
                        <div class="card login">
                            <div class="card-content center-align">
                                <h3 class="titulo">Ingresá a tu cuenta</h3>
                            </div>

                            <div class="divider"></div>
                            {/* <div class="card-content center-align mtop">
                                <p>¡Ingresá con tu cuenta de la Ciudad y accedé a todos tus servicios!</p>
                            </div> */}

                            <form id="login" class="card-content" method="post" action="/id/login/ba?next=/">
                                <input type="hidden" name="csrfmiddlewaretoken" value="LMDSTSWCKIFfdAXsG6UTJCBRDvB7b3QjZTR7ZWV6S1bqxoVgobpSPzFyV4nqJ7r0" />
                                <input type="hidden" name="next" value="/" />

                                <div class="row">
                                    <div class="input-field col s12">
                                        <input autofocus="autofocus" class="validate" id="id_email" maxlength="254" name="email" type="email" required="" />
                                        <label for="id_email" class="">Correo electrónico</label>
                                    </div>

                                    <div class="input-field col s12">
                                        <input autocomplete="off" class="validate" id="id_password" maxlength="128" name="password" type="password" required="" />
                                        <label for="password" class="">Contraseña</label>

                                    </div>

                                </div>

                                <button class="btn waves-effect waves-light baColor mg-20" type="submit">
                                    Continuar
            </button>

                                <p class="mtop center-align">
                                    <a href="/id/password/reset?next=/">¿Olvidaste tu contraseña?</a>
                                </p>
                            </form>




                        </div>


                    </div>
                </div>
            </div>
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

