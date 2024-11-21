import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Articlesfar from '../components/article/arcticlefarine';
import Articlesmai from '../components/article/articlemais';
import Articlesvor from '../components/article/articlevoiture';
import Formulaire from "@/components/Formulaire/form"
import MySwiper from '@/components/swiper/swiper';
import { Span } from "next/dist/trace";
import { BsCodeSlash } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { BiGlobe } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi'
import { BiCode } from 'react-icons/bi';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

  return (
    <section>
    <Navbar isVisible={isNavbarVisible} />
    <div className="accueil-img">
        <div className="text-white ps-5 pt-5" id="accueil">
          <h1 className="text-white fw-boldn mb-4">Vous Aider À Garder Une Longueur D’avance</h1>
          <p className="text-white mb-5 ms-0">
            Notre objectif est d’accélérer vos transactions commerciales d’importation et d’exportation et de vous connecter à De nouvelles opportunités
          </p>
          <div className="button2">
          <button type="button" className="btn btn-outline-danger" id="btn-outline-danger">En Savoir plus</button>
          </div>
        </div>
    </div>

    <div className="partie2">
      <div>
        <div>
          <div className="spanline align-self-center" id="spanline1"></div>
        </div>
        <div>
        <div className="spanline align-self-center" id="spanline2"></div>
          <span className="spantext">Meilleur Service</span>
        </div>
      </div>
      <h3 className="text1">
        Nos Instruments De Financement Du Commerce Ont Fourni Un Service
      </h3>

      <div className="container my-5">
      {/* Row pour les deux premières cartes */}
      <div className="row justify-content-center mb-4">
        {/* Card 1 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Description for Card 1.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Description for Card 2.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row pour les deux cartes suivantes */}
      <div className="row justify-content-center mb-4">
        {/* Card 3 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Description for Card 3.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
              <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Description for Card 4.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row pour les deux dernières cartes */}
      <div className="row justify-content-center">
        {/* Card 5 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Description for Card 5.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 d-flex justify-content-center" id="card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Description for Card 6.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="w-100">
      <Articlesfar /> 
      <Articlesmai />
      <Articlesvor />
    </div>

    <Footer isVisible={isNavbarVisible} />
    </section>
  );
}