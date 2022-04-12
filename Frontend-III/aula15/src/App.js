import { useEffect, useState } from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{




  }, [])

  function getTodo(){
    
  }

  

  return (
    <div className="app">
      <form onSubmit={id ? editTodo : newTodo}>
        <h1>ToDo List - 2.0</h1>
        <div className="inputs">
          <label>
            <span>Título</span>
            <input
              placeholder="Titulo"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            <span>Descrição</span>
            <input
              placeholder="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <div className="row">
            <label>
              <span>Data</span>
              <input
                type="date"
                placeholder="Data"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="container-buttons">
          <button type="submit">{!id ? "Salvar" : "Alterar"}</button>
          <button type="button" onClick={clearStates}>
            Limpar
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            style={todo.status ? { background: "blue" } : { background: "red" }}
          >
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
              <p>{todo.id}</p>
              <p>{todo.status.toString()}</p>
            </div>
            <div className="container-buttons">
              <FiEdit size={20} color="#444" onClick={() => fillStates(todo)} />
              <FiTrash
                size={20}
                color="#444"
                onClick={() => deleteTodo(todo.id)}
              />
              <FiCheck
                size={20}
                color="#444"
                onClick={() => checkTodo(todo.id, todo.status)}
              />
            </div>
          </li>
        ))}
        {loading && <h3>Carregando dados...</h3>}
      </ul>
    </div>
  );
}

export default App;
