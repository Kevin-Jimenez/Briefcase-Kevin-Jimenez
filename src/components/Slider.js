import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../images/FOTO DTO.jpg'

const Slider = () => {
    return (
        <div className="container mt-3">
            <ul className="nav nav-tabs bg-white">
                <li className="nav-item ">
                    <Link className="nav" to="">
                        <img className="rounded-circle m-1"  src={foto} alt="" height="70" width="70"/>
                    </Link>
                </li>
                <li className="nav-item mt-3 mb-3 text-white">
                    <Link className="nav-link active" to="">Intro</Link>
                </li>
                <li className="nav-item mt-3 mb-3 text-white">
                    <a className="nav-link" href="https://github.com/Kevin-Jimenez">  Portafolio</a>
                </li>
                <li className="nav-item mt-3 mb-3 text-white">
                    <Link className="nav-link" to="/Intro">Acerca de mi</Link>
                </li>
    

            </ul>
        </div>
    )
}

export default Slider
