import React from 'react'
import Juegojs2 from '../images/juego.PNG'

const Juegojs = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="Descript">
                    <img src={Juegojs2} alt="" className="imagen" />
                    <div className="Descript ">
                        <div className="column">
                            <h1 className="mt-3"><strong>¿Adivina Quien Soy?</strong></h1>
                            <h4 className="mt-0 ">Juego</h4>
                            <p className="mt-5 ">Juego desarrollado, con el proposito de iniciar con la programacion en JavaScript, el juego
                            tendra el maximo de 5 actores, los cuales el jugador debera adivinar de quien se trata, de acuerdo a una serie de pistas que
                            se otorgan
                            </p>
                            <hr>
                            </hr>
                            <strong>Desarrollado con JavaScript</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Juegojs
