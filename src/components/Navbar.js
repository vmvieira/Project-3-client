/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Navbarmain() {
  return (
    <Navbar className="navbar navbar-expand-lg  navbar-light  bg-dark mb-5 pt-3 pb-3">
      <h5 className="mt-1 text-white mr-3">Projeto3</h5>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active ">
            <Link className="nav-link text-white" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/menus/lista">
              Criar Lista
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/menus/listas-salvas">
              Listas Salvas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/menus/about">
              Sobre os Criadores
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default Navbarmain;
