import React from "react";
import imagen1 from "../assets/images/chickenwok.jpg";
import imagen2 from "../assets/images/friedchickenwok.jpg";
import imagen3 from "../assets/images/meatwok.jpg";
import imagen4 from "../assets/images/hotwok.jpg";
import imagen5 from "../assets/images/porkwok.jpg";
import imagen6 from "../assets/images/porkwokoriental.jpg";
import "./Card.css";

export const CardMenu = () => {
  return (
    <div>
      {/* Primeras tres tarjetas */}
      <div className="row mb-4">
      <div className="card col-md-4 text-center p-3 custom-card">
          <img
            src={imagen1}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Chicken Wok</h4>
            <p className="card-text text-secondary">
              Wok con base a elección, pollo, mix de vegetales, semillas de
              sésamo y salsa de soya.
            </p>
            <p>$6.390</p>
          </div>
        </div>

        <div className="card col-md-4 text-center p-3">
          <img
            src={imagen2}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Fried Chicken Wok</h4>
            <p className="card-text text-secondary">
              Wok con base a elección, pollo apanado, mix de vegetales y salsa
              a elección.
            </p>
            <p>$6.790</p>
          </div>
        </div>

        <div className="card col-md-4 text-center p-3">
          <img
            src={imagen3}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Meat Wok</h4>
            <p className="card-text text-secondary">
              Wok con base a elección, láminas de carne, mix de verduras y
              salsa de soya.
            </p>
            <p>$6.390</p>
          </div>
        </div>
      </div>

      {/* Segundas tres tarjetas */}
      <div className="row mb-4">
        <div className="card col-md-4 text-center p-3">
          <img
            src={imagen4}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Hot Wok</h4>
            <p className="card-text text-secondary">
              Wok con base a elección, mix de verduras, láminas de pollo y
              carne.
            </p>
            <p>$7.590</p>
          </div>
        </div>

        <div className="card col-md-4 text-center p-3">
          <img
            src={imagen5}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Pork Wok</h4>
            <p className="card-text text-secondary">
              Cerdo salteado, con mix de verduras, acompañado de arroz blanco.
            </p>
            <p>$6.390</p>
          </div>
        </div>

        <div className="card col-md-4 text-center p-3">
          <img
            src={imagen6}
            alt=""
            className="img-fluid mx-auto"
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Oriental Pork Wok</h4>
            <p className="card-text text-secondary">
              Wok con base a elección, cerdo salteado, mix de verduras y salsa
              a elección
            </p>
            <p>$6.990</p>
          </div>
        </div>
      </div>
    </div>
  );
};
