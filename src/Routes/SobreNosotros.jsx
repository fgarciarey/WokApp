import React from "react";
import "./SobreNosotros.css";
import { ContacInfo } from "../Components/ContactInfo";

export const SobreNosotros = () => {
  return (
    <div className="sobrenosotros-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h1 className="mb-0 text-black fw-bold">Bienvenidos</h1>
              <br />
              <br />
              <h6 className="mb-5 text-light fw-bold text-center text-sm-start">
              
              <p>En Wokeate tenemos dos grandes pasiones, la buena comida y los viajes.
                <br />
                <br />Llegamos hasta el Lejano Oriente para explorar un nuevo mundo de colores y sabores,recetas elaboradas con sabiduría milenaria para satisfacer cuerpo y alma.
                <br />
                <br />El final del viaje nos trajo no sólo los secretos de la preparación de nuestros platos favoritos, sino también el deseo de compartirlos con ustedes.
                <br />
                <br />En nuestros locales hemos recreado las mismas emociones que los mercados en Bangkok,Hong Kong, Hanoi, Singapur y Tokio nos entregaron cuando empezamos la búsqueda de especias y sabores que utilizamos actualmente para la preparación de nuestros productos.
              </p>
              <p className="mt-5">
              Acá te ofrecemos un nuevo concepto de comida rica, rápida, saludable y al paso cocinada al WOK.
              <br />
              <br />Solo eliges los ingredientes y una salsa de elaboración propia, en unos minutos obtienes tu plato de WOK preparado mientras recorres uno de los lugares más íconico de Santiago, el Persa Bio-Bio. 
              <br />
              <br />Y nuestro nuevo local en Avenida Vitacura.
              </p>




              </h6>
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
