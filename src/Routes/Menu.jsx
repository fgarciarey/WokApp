import React from "react";
import './Menu.css';
import { ContacInfo } from "../Components/ContactInfo";
import { CardMenu } from "../Components/CardMenu";



export const Menu = () => {
  return (
    <div className="menu-page">
      <header className="mt-0">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">
            Menú
          </h1>
        </div>
      </header>
      

      <div className="container d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-6-md-4 my-4">
              <CardMenu />

            </div>
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
