import React from 'react'
// import joto from '../Views/IMAGENES/foto.jpg'

const Intro = () => {
    return (
        <div className="container mt-5">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item ">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Perfil</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Persona con alto sentido de responsabilidad y pertenencia, puntual, líder, con la capacidad de trabajo en equipo y rápido aprendizaje, fácil acoplamiento a los diferentes
                            ambientes laborales, honesto, capaz de generar ideas nuevas, con buena actitud, capaz de enfrentar y superar situaciones desafiantes.<br></br><br></br>
                            Tecnólogo en Análisis y Desarrollo de Sistemas de Información con competencias para especificar los requisitos necesarios para desarrollar
                            el sistema de información de acuerdo con las necesidades del cliente, participar en el proceso de negociación de tecnología informática para permitir
                            la implementación del sistema de información y ejecutar el proceso integral (análisis, diseño, implementación, pruebas y ajustes) de generación de sistemas de información,
                            para la sistematización o automatización de procesos.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Objetivo Profesional</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Establecerme y consolidarme en una empresa que me otorgue estabilidad laboral, aplicar mis experiencias y conocimientos en las distintas áreas de la empresa, y desarrollarme profesionalmente para el buen desempeño de las funciones asignadas.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Formacion Academica</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ol start="1">
                                <strong><li><strong>Tecnologo</strong></li></strong>
                                <p>Analisis y Desarrollo de Sistemas de Informacion <p>2021</p></p><hr></hr>
                                <strong><li><strong>Tecnico</strong></li></strong> 
                                <p>Programacion de Software<p>2019</p></p><hr></hr>
                                <strong><li><strong>Estudios Primarios</strong></li></strong> 
                                <p>Estanislao Zuleta IED<p>(2014-2019)</p></p><hr></hr>
                                <strong><li><strong>Estudios Secundarios</strong></li></strong> 
                                <p>Estanislao Zuleta IED<p>(2008-2013)</p></p>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Cursos o Talleres</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <ol start="1">
                                <strong><li><strong>Programacion en Java</strong></li></strong>
                                <p>Politecnico de Colombia<p>2021</p></p><hr></hr>
                                <strong><li><strong>CCNA Routing & Switching: Escalamiento en redes</strong></li></strong> 
                                <p>CISCO<p>2019</p></p><hr></hr>
                                <strong><li><strong>Manejo de Herramientas Informatica</strong></li></strong> 
                                <p>SENA<p>2019</p></p><hr></hr>
                                <strong><li><strong>CCNA Routing & Switching: Introduccion a redes</strong></li></strong> 
                                <p>CISCO<p>2018</p></p><hr></hr>
                                <strong><li><strong>IT ESSENTIALS</strong></li></strong> 
                                <p>CISCO<p>2017</p></p>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
