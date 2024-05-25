import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
import '../styles/propos.css';
import { FaFacebook, FaLinkedin , FaInstagram } from 'react-icons/fa';


const Propos = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
        <div className="propos-img">
          <div className="text-white ps-5 pt-5" id="propos">
          <h1 className="text-white fw-boldn mb-4 fs-1 text-uppercase">A PROPOS DE NOUS</h1>
          <p className="text-white mb-5 fs-7">
              Explorez notre histoire, notre équipe et notre engagement envers 
              l'excellence en ligne. Chargement en cours...
            </p>
          </div>
        </div>
        <div className="row" id="selection1-propos">
          <div className="col-sm-6" id="img-propo">
            <Image
              src="/accueil4.jpeg"
              width={390}
              height={650}
              className="img-propos"
              alt="c'est moi"
            />
            <Image
            src="/accueil2.jpeg"
            width={400}
            height={350}
            className="img-propos1"
            alt="c'est moi"
            />
          </div>
          <div className="col-sm-6" id="propos-sect">
            <h3>Notre Voyage : De l'idée à l'Innovation</h3>
            <p>
              Depuis notre création, A-Coders s'est engagé à repousser les limites du 
              développement web. Fondée par une équipe de passionnés de technologie, 
              notre histoire est celle d'une quête incessante de l'excellence en ligne. De nos 
              modestes débuts à notre position actuelle, nous avons toujours cru en 
              l'innovation, la créativité et le service à la clientèle. Notre parcours est marqué 
              par la réalisation de projets inspirants et la construction de relations solides avec 
              nos clients. Aujourd'hui, nous sommes fiers de notre passé, mais nous regardons 
              toujours vers l'avenir avec enthousiasme, prêts à relever de nouveaux défis et à 
              créer des expériences web exceptionnelles pour nos clients.
            </p>
            <br/>
            <p>
              Depuis nos humbles débuts, A-Coders s'est engagé à façonner l'avenir du web. 
              Chaque étape de notre parcours a été marquée par notre dévouement à 
              repousser les limites de la créativité et de la technologie. Avec une équipe 
              passionnée et une vision audacieuse, nous avons transformé des idées en 
              réalité, créant des sites web remarquables qui captivent et inspirent. Notre 
              histoire est un témoignage de persévérance, d'innovation et d'engagement 
              envers l'excellence en ligne.
            </p>
            <a href="/contact" className="btn btn-danter" role="button" id='btn'>Commencer maintenant</a>
          </div>
        </div>

        <div className="pro-sec2">
          <h4 className="fs-3">PLONGEZ DANS NOTRE ÉQUIPE: DES EXPERTS UNIS POUR RÉALISER VOS PROJETS WEB</h4>
          <p>
            Chez A-Coders, nous formons une équipe dynamique et passionnée, unie par notre amour commun pour le web et notre engagement à offrir des solutions numériques de 
            qualité supérieure. Forts d'une diversité de compétences et d'expériences, nous sommes parfaitement positionnés pour relever les défis les plus complexes et donner vie à 
            des projets numériques innovants. Que ce soit dans le développement back-end, le développement front-end, le design graphique ou la maquette web, nous avons les 
            compétences nécessaires pour créer des solutions sur mesure qui répondent aux besoins uniques de chaque client. Explorez notre équipe et découvrez les technologies que 
            nous maîtrisons pour donner vie à vos idées sur le web.
          </p>

          <div className="propos2">
            <div className="pro2-1">
              <Image
                src="/accueil4.jpeg"
                width={220}
                height={250}
                className="ms-1 mb-5 mt-1"
                alt="c'est moi"
              />
              <br/>
              <span className="fs-2 text-body-tertiary fw-bold">Abdourahman</span>
              <br/>
              <span className="fonction">DEVELOPPEUR BACK-END</span>
              <p>
                Abdirahman partage la passion d'Ilyas pour le développement back-end et est un expert dans l'utilisation de Django. Il apporte une expertise technique précieuse à notre équipe.
              </p>
              <div className="icon">
                <a href="lien-de-votre-page-facebook"><FaFacebook /></a>
                <a href="lien-de-votre-compte-instagram"><FaInstagram /></a>
                <a href="lien-de-votre-page-linkedin"><FaLinkedin /></a>
              </div>
            </div>
            <div className="pro2-1">
              <Image
                src="/perso1.JPG"
                width={220}
                height={250}
                className="ms-1 mb-5 mt-1"
                alt="c'est moi"
              />
              <br/>
              <span className="fs-3 text-body-tertiary fw-bold">Zakaria Ali</span>
              <br/>
              <span className="fonction">GRAPHIC DESIGNER MAQUETTISTE</span>
              <p>
                Zakaria est notre créatif en chef, capable de transformer les idées en designs web inspirants. Avec sa maîtrise d'Adobe XD et de Figma, il crée des maquettes visuellement époustouflantes qui captivent nos clients.
              </p>
              <div className="icon">
                <a href="lien-de-votre-page-facebook"><FaFacebook /></a>
                <a href="lien-de-votre-compte-instagram"><FaInstagram /></a>
                <a href="lien-de-votre-page-linkedin"><FaLinkedin /></a>
              </div>
            </div>
            <div className="pro2-1">
              <Image
                src="/perso2.JPG"
                width={220}
                height={250}
                className="ms-1 mb-5"
                alt="c'est moi"
              />
              <br/>
              <span className="fs-3 text-body-tertiary fw-bold">Habon Soule</span>
              <br/>
              <span className="fonction">DEVELOPPEUSE FRONT-END</span>
              <p>
                Habon est notre spécialiste du développement front-end, maîtrisant des technologies telles que Next.js, Bootstrap et React.js. Son attention aux détails et son sens de la conception garantissent des interfaces utilisateur exceptionnelles.
              </p>
              <div className="icon">
                <a href="lien-de-votre-page-facebook"><FaFacebook /></a>
                <a href="lien-de-votre-compte-instagram"><FaInstagram /></a>
                <a href="lien-de-votre-page-linkedin"><FaLinkedin /></a>
              </div>
            </div>
            <div className="pro2-1">
              <Image
                src="/perso1.JPG"
                width={220}
                height={250}
                className="ms-1 mb-5 my-1"
                alt="c'est moi"
              />
              <br/>
              <span className="fs-3 text-body-tertiary fw-bold">Ilyas Omar</span>
              <br/>
              <span className="fonction">FONDATEUR DEVELOPPEUR / BACK-END</span>
              <p>
                Ilyas est le fondateur d'A-Coders et un développeur back-end chevronné. Il excelle dans l'utilisation de la technologie Django pour créer des applications web robustes et évolutives.
              </p>
              <div className="icon">
                <a href="lien-de-votre-page-facebook"><FaFacebook /></a>
                <a href="lien-de-votre-compte-instagram"><FaInstagram /></a>
                <a href="lien-de-votre-page-linkedin"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="propos3">
          <h4 className="fs-2 fw-bold">NOS PROJETS RÉALISER</h4>
          <div className="pro3">
            <div className="pro3-1"> 
              <div className="pro3-2">
                <Image
                  src="/projet1.JPG"
                  width={337}
                  height={255}
                  className=""
                  alt="c'est moi"
                />
              </div>
              <div className="pro3-2">
                
              </div>
              <div className="pro3-2">
              
              </div>
            </div>
            <div className="pro3-1">
              <div className="pro3-2">
              
              </div>
              <div className="pro3-2">
              
              </div>
              <div className="pro3-2">

              </div>
            </div>
          </div>
          <div className="w-100 container bg-gris-fonce rounded-10px mb-5">
            <Formulaire isVisible={isNavbarVisible} />
          </div>
        </div>
        <Footer isVisible={isNavbarVisible} />
      </section>
        )
    }
export default Propos;