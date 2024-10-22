import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjetoCadastro from "../pages/ProjetoCadastro";
import JogodaVelha from "../pages/JogodaVelha";

function AppRoutes() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<ProjetoCadastro />} />
            <Route path="/jogo-da-velha" element={<JogodaVelha />} />
         </Routes>
      </Router>
   );
}

export default AppRoutes;
