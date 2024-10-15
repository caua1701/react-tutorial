import { useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
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
      <div className="container">
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
            <div key={user.id} className="card">
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
                  <img src={Trash} />
               </button>
            </div>
         ))}
      </div>
   );
}

export default Home;
