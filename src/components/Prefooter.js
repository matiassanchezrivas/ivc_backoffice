import React from 'react';
import './prefooter.css';



export default function (props) {
    return (
        <div className={'prefooterfondo'}>
            <div className='container'>
                <div className='row'>
                    <ul className='bottomLinks'>
                        {/* <div className='col-lg-3 col-sm-12'> */}
                        <li >
                            <a href={'https://vivienda.buenosaires.gob.ar/'} target={'_blank'}  >
                                Inicio
                                </a>
                        </li>
                        {/* </div>
                        <div className='col-lg-3 col-sm-12'> */}
                        <li >
                            <a href={''}>
                                Publicar
                                </a>
                        </li>
                        {/*                         </div>
                        <div className='col-lg-3 col-sm-12'> */}
                        <li >
                            <a href={''} target={'blank'}>
                                Ver Términos y Condiciones
                                </a>
                        </li>
                        {/*                         </div>
                        <div className='col-lg-3 col-sm-12'> */}
                        <li >
                            <a href={''}>
                                Preguntas Frecuentes
                                </a>
                        </li>
                        {/* </div> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}