import "./style.css";
import See from "../../assets/see.svg";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div className="container">
         <div className="list">
            <h1>Lista de Tutoriais:</h1>

            <div className="item-list">
               <div>
                  <p>Tutorial no site oficial do React</p>
                  <a href="https://pt-br.react.dev/learn">
                     https://pt-br.react.dev/learn
                  </a>
               </div>
               <Link to="/cadastro">
                  <img src={See} alt="" />
               </Link>
            </div>

            <div className="item-list">
               <div>
                  <p>
                     Tutorial Youtube - Aprendendo React do Zero, Conectando
                     Back e Front End, e Consumindo API
                  </p>
                  <a href="https://www.youtube.com/watch?v=_gHr2Pe5LCY&t=0s">
                     https://www.youtube.com/watch?v=_gHr2Pe5LCY&t=0s
                  </a>
               </div>
               <Link to="/cadastro">
                  <img src={See} alt="" />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Home;
