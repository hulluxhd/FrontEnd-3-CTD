
import { useState } from "react";
import { useFormik, Formik } from "formik"
import swal from "sweetalert"
import "./style.css"
import InputMask from "react-input-mask"


function App() {

  return (
    <div className="App">
      <Formik
        initialValues={{
          nome: "",
          email: "",
          nascimento: "",
          telefone: "",
          cpf: "",
          peso: "",
          altura: ""
        }}
        validate={(values) => {
          const errors = {}
          if (!values.nome) { errors.nome = "Campo obrigatório" }
          if (!values.email) { errors.email = "Campo obrigatório" }
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido";
          }
          if (!values.nascimento) { errors.nascimento = "Campo obrigatório" }
          if (!values.telefone) { errors.telefone = "Campo obrigatório" }
          else if (
            !/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/.test(
              values.telefone
            )
          ) { errors.telefone = "Telefone inválido" }
          if (!values.cpf) { errors.cpf = "Campo obrigatório" }
          else if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(values.cpf)) {
            errors.cpf = "CPF inválido";
          }
          if (!values.peso) { errors.peso = "Campo obrigatório" }
          else if (!/^\d+(?:\.\d+)?$/.test(values.peso)) {
            errors.peso = "Peso inválido";
          }

          if (!values.altura) { errors.altura = "Campo obrigatório" }
          else if (!/^\d+(?:\.\d+)?$/.test(values.altura)) {
            errors.altura = "Altura inválido";
          }

          return errors
        }}
        onSubmit={() => swal("Enviado")}
      >
        {(formik) => (
          <div className="form-conteiner">
            <form onSubmit={formik.handleSubmit}>

              <div className="form-header">
                <h2>Cadastro de pacientes</h2>
                <div className="form-buttons">
                  <button type="submit" >Enviar</button>
                  <button onClick={formik.resetForm}>Limpar formulário</button>
                </div>
              </div>

              <label>
                <span>Nome</span>
                <input type="text" name="nome" {...formik.getFieldProps("nome")} />
                <span>{formik.errors.nome}</span>
              </label>

              <label>
                <span>Email</span>
                <input type="text" name="email" {...formik.getFieldProps("email")} />
                <span>{formik.errors.email}</span>
              </label>

              <label>
                <span>Nascimento</span>
                <input type="date" name="nascimento" {...formik.getFieldProps("nascimento")} />
                <span>{formik.errors.nascimento}</span>
              </label>

              <label>
                <span>Telefone</span>
                <InputMask mask="(99) 99999-9999" name="telefone" {...formik.getFieldProps("telefone")} />
                <span>{formik.errors.telefone}</span>
              </label>

              <label>
                <span>CPF</span>
                <input type="text" name="cpf" {...formik.getFieldProps("cpf")} />
                <span>{formik.errors.cpf}</span>
              </label>

              <label>
                <span>Peso</span>
                <input type="text" name="peso" {...formik.getFieldProps("peso")} />
                <span>{formik.errors.peso}</span>
              </label>

              <label>
                <span>Altura</span>
                <input type="text" name="altura" {...formik.getFieldProps("altura")} />
                <span>{formik.errors.peso}</span>
              </label>

              {formik.values.altura && formik.values.peso ?
                <div style={{textAlign: "center"}} className="imc">
                  <h1>IMC</h1>
                  <h3>{(parseFloat(formik.values.peso) / parseFloat(formik.values.altura) ** 2).toFixed(2)}</h3>
                </div> 
                : null}


            </form>


          </div>




        )}


      </Formik>
    </div>

  )
}

export default App;
