import { Formik } from "formik"
import { useState } from "react"
import {FiEdit3} from "react-icons/fi"
import {FaTrash} from "react-icons/fa"

import "./style.css"

function App() {

  const [dados, setDados] = useState([{ title: "teste", desc: "opa", timestamp: new Date().timestamp }])



  return (
    <div className="container">

      <Formik
        initialValues={{
          title: "",
          desc: "",
          timestamp: ""
        }}
        validate={(values) => {
          const errors = {}
          if (!values.title) errors.title = "Preencha o campo"
          if (!values.desc) errors.desc = "Preencha o campo"
          return errors
        }}
        onSubmit={() => { alert("OK") }}
        className="form"
      >

        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <h2 style={{ textAlign: "center" }}>TodoList 2.0 - semeando requisições, o retorno</h2>
            <div className="form-inputs">
              <label>
                <span>Título</span>
                <input type="text" {...formik.getFieldProps("title")} />
                <span>{formik.errors.title ? <span>{formik.errors.title}</span> : null}</span>
              </label>
              <label>
                <span>Descrição</span>
                <input type="text" {...formik.getFieldProps("desc")} />
                <span>{formik.errors.desc ? <span>{formik.errors.desc}</span> : null}</span>
              </label>
            </div>
            <div className="form-buttons">
              <button type="submit">Cadastrar</button>
              <button onClick={formik.resetForm}>Limpar</button>
            </div>
          </form>
        )}
      </Formik>
      <div className="registros">
        <ul>
          {dados.map((dado) => (
            <li className="registros-item">
              <div className="registros-info">
                <h3>{dado.title}</h3>
                <p>{dado.desc}</p>
              </div>
              <div className="registros-buttons">
                <FiEdit3/>
                <FaTrash />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App;
