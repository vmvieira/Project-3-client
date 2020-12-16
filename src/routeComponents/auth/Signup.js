import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import { Container } from "react-bootstrap";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <Container>
      <div className="">
        <form className="container  w-75 midpage " onSubmit={handleSubmit}>
          <h1 className="text-center ">Registar-se!</h1>

          <div className="text-center form-group">
            <label htmlFor="signupFormName">Nome Completo</label>
            <input
              className="form-control login"
              placeholder="Name "
              type="text"
              name="name"
              id="signupFormName"
              value={state.name}
              error={errors.name}
              onChange={handleChange}
            />
          </div>

          <div className="text-center form-group">
            <label htmlFor="signupFormEmail ">Endereço de E-mail</label>
            <input
              placeholder="E-maill"
              className="form-control login"
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="text-center form-group">
            <label htmlFor="signupFormPassword">Senha</label>
            <input
              placeholder="Password"
              className="form-control login"
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <div className="text-center form-group ">
            <button className="btn btn-primary login " type="submit">
              Registrar-se!
            </button>
          </div>
          <div className="text-center form-group">
            <Link className="linkcolor" to="/auth/login">
              Já tem uma conta? Clique aqui para conectar-se.
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
