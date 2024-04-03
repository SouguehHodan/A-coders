import Image from "next/image";

const Footer =({ isVisible }) => {
    if (!isVisible) {
      return null; // Si isVisible est faux, ne pas rendre le header
    }
  
    return (
<footer class="text-center text-lg-start text-muted bg-gris-fonce">
  <section class="d-flex justify-content-center justify-content-lg-between">
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter text-danger"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
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
          <p>
            <span className="text-red text-capitalize fw-bolder fs-5"> suivez nous :</span>
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <div className="d-flex flex-column">
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Accueil</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">A propos de nous</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Service</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Portfolio</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Contact</a>
          </div>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Service
          </h6>
          <div className="d-flex flex-column">
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Developpent web</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Location du site web</a>
            <a href="#!" class="d-block text-reset text-decoration-none fw-bold fs-7">Maintenance du site web</a>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <div className="d-flex flex-column">
            <span className="d-block fw-bold"><i class="fas fa-home me-3"></i>+25377885799</span>
            <span className="d-block fw-bold"><i class="fas fa-envelope me-3"></i> a-coders@gamil.com</span>
            <span className="d-block fw-bold"><i class="fas fa-phone me-3"></i>Avenue 26, Q5 ,Djibouti</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="d-none d-lg-block p-4 border-top" id="footer">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    <span>Créé avec passion par A-coders.</span>
  </div>
</footer>
    )
    }
    export default Footer;