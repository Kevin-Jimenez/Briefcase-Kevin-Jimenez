import React from 'react'
import {Link} from "react-router-dom"
import Asa3 from '../images/asa.PNG'
import Asadero3 from '../images/asadero.PNG'
import Bus3 from '../images/bus.PNG'
import Buses3 from '../images/buses.PNG'
import Fotomia3 from '../images/FOTO DTO.jpg'
import Juego3 from '../images/juego.PNG'
import Juegojs3 from '../images/juegojs.PNG'

const Navegacion = () => {
    return (
        <div className=" container mt-3 padre">
            <Link to="/Asa" className="links">
                <figure>
                    <img src={Asadero3} alt="" className="tamaño-img" />
                    <figcaption>Proyecto Restaurante</figcaption>
                </figure>
            </Link>

            <Link to="/Buses" className="links">
                <figure>
                    <img src={Buses3} alt="" className="tamaño-img" />
                    <figcaption>Proyecto Buses</figcaption>
                </figure>
            </Link>

            <Link to="/Juegojs" className="links">
                <figure>
                    <img src={Juegojs3} alt="" className="tamaño-img" />
                    <figcaption>Proyecto Juego</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
