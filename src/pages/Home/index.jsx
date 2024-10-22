import style from "./home.module.css"; // Import do CSS Modules
import See from "../../assets/see.svg";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div className={style.container}>
         {" "}
         {/* Aplicando a classe com CSS Modules */}
         <div className={style.list}>
            {" "}
            {/* Aplicando outra classe */}
            <h1>Lista de Tutoriais:</h1>
            <div className={style.itemList}>
               {" "}
               {/* Usando a classe item-list como itemList no CSS Module */}
               <div>
                  <p>Tutorial no site oficial do React</p>
                  <a href="https://pt-br.react.dev/learn/tutorial-tic-tac-toe">
                     https://pt-br.react.dev/learn/tutorial-tic-tac-toe
                  </a>
               </div>
               <Link to="/jogo-da-velha">
                  <img src={See} alt="Visualizar Tutorial" />
               </Link>
            </div>
            <div className={style.itemList}>
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
                  <img src={See} alt="Visualizar Tutorial" />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Home;
