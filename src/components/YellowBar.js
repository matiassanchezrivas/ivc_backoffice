
import React from 'react';
import './YellowBar.css';
export default function (props) {
    return (
        <div className="yellowbar"  >
            <div className="container">
                <div className="row" >
                    <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="loginButton button js-form-submit form-submit btn-default btn logginC" type="button">Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

