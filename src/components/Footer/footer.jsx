import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer =({ isVisible }) => {
    if (!isVisible) {
      return null; // Si isVisible est faux, ne pas rendre le header
    }
  
    return (
<footer className="text-center text-lg-start text-muted" id="foote">
  <section className="d-flex justify-content-center justify-content-lg-between">
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter text-danger"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <Image
            src="/logo1.PNG"
            width={200}
            height={50}
            className="mb-3"
          />
          <p className="text-gris-fonce fw-bold">
            À A-Coders, nous façonnons l'avenir du web, 
            ligne de code par ligne de code. Joignez-vous à nous 
            dans cette aventure vers l'innovation et l'excellence en ligne.
          </p>
          <div>
            <span className="text-red text-capitalize fw-bolder fs-5"> suivez nous :</span>
            <div>
              <a href="lien_vers_votre_page_facebook" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={30} className="icon1"/></a>
              <a href="lien_vers_votre_compte_instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} className="icon1"/></a>
              <a href="lien_vers_votre_compte_twitter" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} className="icon1"/></a>
              <a href="lien_vers_votre_chaine_youtube" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} className="icon1"/></a>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <div className="d-flex flex-column">
            <a href="/" className="d-block text-reset text-decoration-none fw-bold fs-7">Accueil</a>
            <a href="/propos" className="d-block text-reset text-decoration-none fw-bold fs-7">A propos de nous</a>
            <a href="/service" className="d-block text-reset text-decoration-none fw-bold fs-7">Service</a>
            <a href="portfolio" className="d-block text-reset text-decoration-none fw-bold fs-7">Portfolio</a>
            <a href="contact" className="d-block text-reset text-decoration-none fw-bold fs-7">Contact</a>
          </div>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Service
          </h6>
          <div className="d-flex flex-column">
            <a href="#!" className="d-block text-reset text-decoration-none fw-bold fs-7">Developpent web</a>
            <a href="#!" className="d-block text-reset text-decoration-none fw-bold fs-7">Location du site web</a>
            <a href="#!" className="d-block text-reset text-decoration-none fw-bold fs-7">Maintenance du site web</a>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <div className="d-flex flex-column">
            <span className="d-block fw-bold"><FaPhone size={25}  className="icon1"/>+25377885799</span>
            <span className="d-block fw-bold"><FaEnvelope size={25}  className="icon1"/>a-coders@gamil.com</span>
            <span className="d-block fw-bold"><FaMapMarkerAlt size={25} className="icon1"/>Avenue 26, Q5 ,Djibouti</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="d-none d-lg-block p-4 border-top" id="footer">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="">A-Coders</a>
    <span>Créé avec passion par A-coders.</span>
  </div>
</footer>
    )
    }
    export default Footer;