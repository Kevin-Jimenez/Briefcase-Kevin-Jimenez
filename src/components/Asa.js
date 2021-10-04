import React from 'react'
import Asa2 from '../images/asa.PNG'

const Asa = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="Descript">
                    <img src={Asa2} alt="" className="imagen" />
                    <div className="Descript ">
                        <div className="column">
                            <h1 className="mt-3"><strong>Picar Pollo</strong></h1>
                            <h4 className="mt-0 ">Asadero - Restaurante - Fruteria</h4>
                            <p className="mt-5 ">Este proyecto se desarrollo, para un restaurante ubicado en Usme, el cual su proposito general es tener un control de mesas
                                y pedidos del mismo.
                            </p>
                            <hr>
                            </hr>
                            <strong>Desarrollado con PHP - JQuey - JavaScript - MySQL</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asa
