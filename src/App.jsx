import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Menu } from "./Routes/Menu";
import { Contacto } from "./Routes/Contacto";
import { Reservas } from "./Routes/Reservas";
import { SobreNosotros } from "./Routes/SobreNosotros";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<SobreNosotros/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/reservas" element={<Reservas/>}/>
      </Routes>
      <footer className="bg-body-tertiary">
        <p className="p-3 m-2 text-center">
          Wokeate @ Creado por Felipe García-Rey - Bootcamp Fullstack C8 UDD 2023
        </p>
      </footer>
    </>

  );
}

export default App;
