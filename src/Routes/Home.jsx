import React from "react";
import { MenuBtn } from "../Components/MenuBtn";
import "./Home.css";
import AboutImg from "../assets/images/wallblanco.jpg";
import { Link } from "react-router-dom";
import { ContacInfo } from "../Components/ContactInfo";
import logowok from "../assets/images/logowok.png";

export const Home = () => {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 text-black fw-bold">Bienvenido a</h2>
              <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                Wokeate
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>
      <div
        className="container-fluid my-0"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
        }}
      >
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            {/* Botón de Reserva */}
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Reserva tu día</h2>
            <Link to="/reservas">
              <button
                type="button"
                className="btn btn-success btn-lg btn-lg mb-4"
              >
                Reserva ahora
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mt-4">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Sobre Nosotros</h2>
            <p>
              En Wokeate te ofrecemos un nuevo concepto de comida rica, rápida,
              saludable y al paso cocinada al WOK.
            </p>
            <p className="mb-5">
              Solo eliges los ingredientes y una salsa de elaboración propia, en
              unos minutos obtienes tu plato de WOK preparado mientras recorres
              uno de los lugares más íconico de Santiago, el Persa Bio-Bio.
            </p>
            <Link to="/nosotros">
              <button type="button" className="btn btn-outline-primary btn-lg">
                Conoce más de nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center mt-4">
              <ContacInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
