import React from 'react'


const Aprendizaje = () => {
    return (
        <div className="container">
            <div className="Front">
                <h4 className="mt-3">Front-End</h4>
                <div className="mt-4">
                    <h6>HTML5</h6>
                    <progress className="prs1" max="100" value="80"></progress>
                    <span>80%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>CSS3</h6>
                    <progress className="prs2" max="100" value="60"></progress>
                    <span>60%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>Bootstrap</h6>
                    <progress className="prs4" max="100" value="80"></progress>
                    <span>80%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>Vue Js</h6>
                    <progress className="prs4" max="100" value="60"></progress>
                    <span>60%</span>
                </div>
            </div>

            <br></br>
           
            <div className="Back">
                <h4 className="mt-3">Back-End</h4>
                <div className="mt-4">
                    <h6>JavaScript</h6>
                    <progress className="prs6" max="100" value="60"></progress>
                    <span>60%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>Python</h6>
                    <progress className="prs7" max="100" value="50"></progress>
                    <span>50%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>Java</h6>
                    <progress className="prs8" max="100" value="65"></progress>
                    <span>65%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>PHP</h6>
                    <progress className="prs9" max="100" value="60"></progress>
                    <span>60%</span>
                </div>
            </div>
            <hr></hr>

            <div className="PW">
                <h4 className="mt-3">Power Platform</h4>
                <div className="mt-4">
                    <h6>Power Apps</h6>
                    <progress className="prs6" max="100" value="90"></progress>
                    <span>70%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>SharePoint</h6>
                    <progress className="prs7" max="100" value="80"></progress>
                    <span>70%</span>
                </div>
                <hr></hr>
                <div>
                    <h6>Power Automate</h6>
                    <progress className="prs8" max="100" value="80"></progress>
                    <span>60%</span>
                </div>
            </div>
        </div>
    )
}

export default Aprendizaje
