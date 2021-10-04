import React from 'react'
import hshs from '../images/juego.PNG'
import Aprendizaje from './Aprendizaje'
import Slider from './Slider'

const Carrusel = () => {
    return (
        <div className="container">
            <h1 className="mt-5 text-center"><strong>Reseña</strong></h1>

            <h4 className="mt-5 text-center">Soy un joven, con poca experiencia pero con muchas ganas de aprender cosas nuevas, soy tecnico y tecnologo en el desarrollo de Software ademas de tener conocimientos en redes con cursos certificados por Cisco, la programacion me ha enseñado que todo en la vida es posible.
            </h4>
            <h6 className="mt-5 text-center">¡SI PUEDES IMAGINARLO, PUEDES PROGRAMARLO!</h6>
            <p className="mt-2 text-center">- Alejandro Taboada -</p>
            <hr className="mt-3">
            </hr>
            <h3 className="mt-3 text-center">Manejo de Tacnologias</h3><br></br>
           <Aprendizaje />
        </div>

    )
}

export default Carrusel
