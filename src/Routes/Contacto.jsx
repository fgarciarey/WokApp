import React from 'react';
import { ContacInfo } from "../Components/ContactInfo";
import "./Contacto.css";


export const Contacto = () => {
  return (
    <div className="contact-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <h1 className="mb-0 text-light fw-bold">Comunicate con nosotros</h1>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
              <form className="box-content">              
                <section className="form g-col-0">
                    <div className="form-group col-6 g-col-1 text-black">
                        <label for="nombre">Nombre</label>
                        <input type="text" placeholder="Nombre" value="" id="nombre" required/>
                    </div>

                    <div className="form-group col-6 g-col-1 text-black">
                        <label for="apellido">Apellido</label>
                        <input type="text" placeholder="Apellido" value="" id="apellido" required/>
                    </div>                

                    <div className="form-group col-6 g-col-1 text-black">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" value="" id="email" required/>
                    </div>

                    <div className="form-group col-6 g-col-1 text-black">
                        <label for="telefono">Teléfono</label>
                        <input type="text" placeholder="Ej: +56932508917" value="" id="telefono" required/>
                    </div>

                    <div className="form-group col-12 g-col-1 text-black">
                        <label for="consulta">Consulta</label>
                        <textarea name="" placeholder="Coméntanos" id="consulta" required></textarea>
                    </div>

                    <div className="form-group col-12 align-end g-col-1">
                        <button type="button" name="enviar" value="Enviar" class="button">Enviar</button>
                    </div>
                    
                </section>

            </form>
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
