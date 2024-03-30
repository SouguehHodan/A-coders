"use client";
// import style from './navbarstyle.css';
import Links from "./links/Links";
import './navbar.css';
// import 'animate.css';
import Image from "next/image";
import {useState ,useEffect} from 'react';

const Navbar =({ isVisible }) => {
  // state 
  const [navbarsolid,setNavbarSolid] = useState(false);
// comportement
  useEffect(()=>{
    const handleScroll = () =>{
      const isTop = window.scrollY < 100;
      if(!isTop){
        setNavbarSolid(true);
      }else{
        setNavbarSolid(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return () =>window.removeEventListener('scroll',handleScroll);
  },[]);
 
  //rerender
    if (!isVisible) {
      return null; // Si isVisible est faux, ne pas rendre le header
    }
  
    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navbarsolid ?'bg-dark':'navbar-transparent'} shadow-sm  p-2 text-dark`}>
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                <i className="fas fa-cubes fa-2x me-4"></i>
                <span className="h2 fw-bold mb-0 ms-5 text-white">
                  <Image
                    src="/logo.png"
                    width={200}
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
                            <a className="nav-link active text-white custom-link" aria-current="page" href="/">Accueil</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active text-white custom-link" aria-current="page" href="/propos">A propos</a>
                          </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-link" href="/service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-link" href="/contact">Contact</a>
                        </li>
                        {/* <li className="nav-item">
                            <a  href="/contact" className="btn btn-dark" role="button">Rejoin nous</a>
                        </li> */}
                    </ul>
                    <a  href="/contact" className="btn btn-danger animate__animated animate__bounceInUp" role="button" id='btn'>Rejoin nous</a>
                </div>
            </div>
            </div>
        </nav>
        )
}
export default Navbar;