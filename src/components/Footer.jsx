import React from 'react';
import '../css/footer.css';
import bacFooter from '../assets/imagenes/bac-footer.png'
import bavosFooter from '../assets/imagenes/bavos-footer.png'
import logoIvcBlanco from '../assets/imagenes/logo-ivc-blanco.png'
import fb from '../assets/imagenes/facebook.PNG'
import tw from '../assets/imagenes/tw.PNG'
import lin from '../assets/imagenes/in.PNG'
import ig from '../assets/imagenes/ig.PNG'

export default function (props) {
    return (
        <div className={'footergob'} >
            <div  >
                <div className="container" >
                    <div className="row" >
                        <div className="col-lg-3 col-sm-12"   >
                            <div className="row" style={{ paddingLeft: 30 + 'px' }} >
                                <div className="col-lg-6 col-sm-12" >
                                    <img style={{ maxWidth: 115 + 'px', paddingBottom: 12 + '%' }} src={bavosFooter} alt={'bavosFooter'} />
                                </div>
                                <div className="col-lg-6 col-sm-12" >
                                    <img style={{ maxWidth: 100 + 'px' }} src={logoIvcBlanco} alt={'logoIvcBlanco'} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className={'titlegob'}>
                                <h4 className='textTitle'>Instituto de Vivienda de la Ciudad</h4>
                                <p style={{ fontSize: 13 + 'px', marginTop: 10 + 'px' }} >Dr. Enrique Finochietto 435 Planta Baja
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div>
                                <a href={'https://www.facebook.com/IVCBuenosAires/'} target={'_blank'}>
                                    <img style={{ padding: 4 + 'px', maxWidth: 30 + 'px' }} src={fb} alt={'fb'} />
                                </a>
                                <a href={'https://twitter.com/IVCBuenosAires'} target={'_blank'}>
                                    <img style={{ padding: 3 + 'px', maxWidth: 30 + 'px' }} src={tw} alt={'tw'} />
                                </a>
                                <a href={'https://www.linkedin.com/company-beta/22296331/'} target={'_blank'}>
                                    <img style={{ padding: 3 + 'px', maxWidth: 30 + 'px' }} src={lin} alt={'lin'} />
                                </a>
                                <a href={'https://www.instagram.com/ivcbuenosaires/'} target={'_blank'}>
                                    <img style={{ padding: 3 + 'px', maxWidth: 30 + 'px' }} src={ig} alt={'ig'} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container" >
                        <div className={'bordergob'} >
                            <div className="row" >
                                <img src={bacFooter} alt={'bacFooter'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
