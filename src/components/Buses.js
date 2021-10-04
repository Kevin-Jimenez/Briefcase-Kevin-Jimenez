import React from 'react'
import Buses2 from '../images/bus.PNG'

const Buses = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="Descript">
                    <img src={Buses2} alt="" className="imagen" />
                    <div className="Descript ">
                        <div className="column">
                            <h1 className="mt-3"><strong>Transporte</strong></h1>
                            <p className="mt-5 ">Este proyecto fue desarrollado, con el proposito de tener el control de las rutas dentro de una compañia,
                            el programa permite realizar CRUD tanto de los conductores como de las rutas, algunas funcionalidades solo las podra realizar el administrador
                            </p>
                            <hr>
                            </hr>
                            <strong>Desarrollado con PHP - JQuey - JavaScript - PostgreSQL</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buses
