import logowok from '../assets/images/logowok.png';

export const Footer= () => {
    return (
      <div className="container mx-auto footer">
          <div className='footer100'><img src={logowok} alt='Imagen Logo' className='footerLogo' /> <span className="footerText1"> Wokeate </span> <span className="footerText2 footerMl"> |  2023 © Todos los derechos reservados </span> </div>
          <div className='footer100'> <span className="footerText2">Diseñado por </span> <span className="footerText1 footerMl"> Felipe García-Rey</span> </div>
      </div>
    )
  }
