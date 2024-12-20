"use client";
// import style from './navbarstyle.css';
import Links from "./links/Links";
import "./navbar.css";
// import 'animate.css';
import Image from "next/image";
import {useState ,useEffect} from 'react';
import './navbar'

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
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navbarsolid ?'bg-dark':'navbar-transparent'} shadow-sm p-1 text-dark`} id="navbar">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between mb-2 pb-1">
                <i className="fas fa-cubes fa-2x me-4"></i>
                <span className="h3 fw-bold mb-0 text-white" id="nav-img">
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
                            <a  href="/contact" className="btn btn-dark" role="button" id="but">Rejoin nous</a>
                        </li> */ }
                    </ul>
                    <a  href="/contact" className="btn btn-danger text-center" role="button" id='btn'>Rejoin nous</a> 
                </div>
            </div>
            </div>
        </nav> 
        )
}
export default Navbar;