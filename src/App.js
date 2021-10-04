import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Slider from './components/Slider'
import Asa from './components/Asa';
import Asadero from './components/Asadero';
import Bus from './components/Bus';
import Buses from './components/Buses';
import Fotomia from './components/Fotomia';
import Juego from './components/Juego';
import Juegojs from './components/Juegojs';
import Navegacion from './components/Navegacion';
import Intro from './components/Views/Intro';
import carrusel from './components/Carrusel';
import Carrusel from './components/Carrusel';
import Aprendizaje from './components/Aprendizaje';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Slider />
      <Route path="/Intro" component={Intro} />
      <Route path="/Asa" component={Asa} />
      <Route path="/Asadero" component={Asadero} />
      <Route path="/Bus" component={Bus} />
      <Route path="/Buses" component={Buses} />
      <Route path="/Juego" component={Juego} />
      <Route path="/Juegojs" component={Juegojs} />
      <Navegacion />
      <Carrusel />
      <Footer/>
    </Router>
  );
}

export default App;
