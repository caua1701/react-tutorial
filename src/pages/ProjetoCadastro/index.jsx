import { useState } from "react";
import style from "./cadastro.module.css"; // Importa o CSS Module
import Trash from "../../assets/trash.svg";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

function ProjetoCadastro() {
   const [users, setUsers] = useState(() => {
      const usersSalvos = localStorage.getItem("users");
      return usersSalvos ? JSON.parse(usersSalvos) : [];
   });

   const [name, setName] = useState("");
   const [idade, setIdade] = useState("");
   const [email, setEmail] = useState("");

   function addUser() {
      const newUser = {
         id: users.length + 1,
         name: name,
         idade: idade,
         email: email,
      };

      const atualizaUsers = [...users, newUser];
      setUsers(atualizaUsers);
      localStorage.setItem("users", JSON.stringify(atualizaUsers));

      setName("");
      setIdade("");
      setEmail("");
   }

   function deleteUser(id) {
      const atualizaUsers = users.filter((user) => user.id !== id);
      setUsers(atualizaUsers);
      localStorage.setItem("users", JSON.stringify(atualizaUsers));
   }

   return (
      <div className={style.container}>
         <Link to="/">
            <img src={arrow} alt="" className="back" />
         </Link>{" "}
         <form>
            <h1>Cadastro de Usuários</h1>
            <input
               placeholder="Nome"
               name="nome"
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <input
               placeholder="Idade"
               name="idade"
               type="number"
               value={idade}
               onChange={(e) => setIdade(e.target.value)}
            />
            <input
               placeholder="E-mail"
               name="email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={addUser}>
               Cadastrar
            </button>
         </form>
         {users.map((user) => (
            <div key={user.id} className={style.card}>
               {/* Usando a classe do CSS Module */}
               <div>
                  <p>
                     Nome: <span>{user.name}</span>
                  </p>
                  <p>
                     Idade: <span>{user.idade}</span>
                  </p>
                  <p>
                     Email: <span>{user.email}</span>
                  </p>
               </div>
               <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="Delete" />
               </button>
            </div>
         ))}
      </div>
   );
}

export default ProjetoCadastro;
