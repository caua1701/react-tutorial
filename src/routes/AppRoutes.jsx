import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjetoCadastro from "../pages/ProjetoCadastro";

function AppRoutes() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<ProjetoCadastro />} />
         </Routes>
      </Router>
   );
}

export default AppRoutes;
