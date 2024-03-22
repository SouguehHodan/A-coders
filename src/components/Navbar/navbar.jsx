// import style from './navbarstyle.css';
import Links from "./links/Links";
import Image from "next/image";

const Navbar =({ isVisible }) => {
    if (!isVisible) {
      return null; // Si isVisible est faux, ne pas rendre le header
    }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm  p-2 text-dark bg-opacity-10">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                <i className="fas fa-cubes fa-2x me-4"></i>
                <span className="h2 fw-bold mb-0 ms-5 text-white">
                  <Image
                    src="/logo.png"
                    width={150}
                    height={50}
                  />
                </span>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className='nav-res'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/">Accueil</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active text-white" aria-current="page" href="/propos">A propos</a>
                          </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contact</a>
                        </li>
                        {/* <li className="nav-item">
                            <a  href="/contact" className="btn btn-dark" role="button">Rejoin nous</a>
                        </li> */}
                    </ul>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
            </div>
            </div>
        </nav>
        )
}
export default Navbar;