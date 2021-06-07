import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();


  return (
    <div className="App">
      <div className="container-form">
        <div className="background-top" />
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="container-form-title">
            <h2>Redefina sua senha</h2>
            <p>
              Por favor, digite sua nova senha abaixo e depois a confirme. Lembrando, elas devem ser iguais.
            </p>
          </div>
          <div className="container-form-input">

            <input
              type="password"
              name="password"
              className="input-password-form"
              placeholder="Digite sua senha"
              {...register("password", { required: "Campo obrigatório!" })}
            />
            {errors.password && (
              <span id="msg-error"> {errors.password.message}</span>
            )}
            <input
              type="password"
              name="passwordConfirm"
              className="input-password-form"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm", {
                required: "Campo obrigatório!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas devem ser iguais!";
                  }
                }
              })}
            />
            {errors.passwordConfirm && (
              <span id="msg-error"> {errors.passwordConfirm.message}</span>
            )}

            <button type="submit" className="btn-confirm">enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
