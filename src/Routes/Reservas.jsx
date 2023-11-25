import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Input } from "../Components/Input";
import "./Reservas.css";
import { ContacInfo } from "../Components/ContactInfo";

export const Reservas = () => {
  // References
  const reservasCollectionRef = collection(db, "reservas");

  // State to store data and control editing
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comensales, setComensales] = useState("");
  const [fecha, setFecha] = useState("");

  // Reservation function
  const crearReserva = async (e) => {
    e.preventDefault();

    // Validation of fields
    if (!nombre || !email || !telefono || !comensales || !fecha) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // If fields are complete, create reservation
    await addDoc(reservasCollectionRef, {
      nombre,
      email,
      telefono,
      comensales,
      fecha,
    });

    alert("Reserva exitosa");
  };

  return (
    <div className="reserva-page header">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <div className="reserva-text-container">
                <h1 className="mb-0 text-black fw-bold">Reserva</h1>
                <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                  tú día!
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-container p-4 rounded shadow">
                
                <form onSubmit={crearReserva}>
                  <Input
                    nombre={nombre}
                    setNombre={setNombre}
                    email={email}
                    setEmail={setEmail}
                    telefono={telefono}
                    setTelefono={setTelefono}
                    comensales={comensales}
                    setComensales={setComensales}
                    fecha={fecha}
                    setFecha={setFecha}
                  />

                  <div className="d-grid gap-2 col-12 mt-3">
                    <button
                      type="submit"
                      className="btn btn-success align-item-center"
                    >
                      Agregar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
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
