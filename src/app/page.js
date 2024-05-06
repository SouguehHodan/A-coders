import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
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

        <div className="container1">
          <h4 className="d-flex justify-content-center gap-3 text-red-1 fs-5">
            <div className="spanline align-self-center"></div>  
              LE FUTUR DU WEB COMMENCE MAINTENANT 
              <div className="spanline align-self-center"></div>
          </h4>
        </div>

          <h1 className="text-white fw-boldn mb-4"><span className="acc-colo">A-CODERS</span>, VOTRE PARTENAIRE POUR 
          <span className="acc-colo"> DES SITES WEB EXTRAORDINAIRES</span></h1>
          <p className="text-white mb-5">
            Notre approche innovante du développement web combine les dernières 
            technologies avec une conception visuelle époustouflante, pour vous offrir 
            un site web qui se démarque dans un monde numérique en constante 
            évolution
          </p>
          <div className="button2">
          <button type="button" className="btn btn-danger me-3" id="button">Voir notre Portfolio </button>
          <button type="button" className="btn btn-outline-danger">En Savoir plus</button>
          </div>
        </div>
      </div>
    <div className="partie2">
      <div className="section">
        <div className="section1">
          <Image
            src="/accueil1.jpg"
            width={260}
            height={220}
            className="mb-3"
            alt="c'est moi"
          />
          <br/>
          <Image
            src="/accueil2.jpeg"
            width={260}
            height={220}
            className="img1"
            alt="c'est moi"
          />
          <Image
              src="/accueil4.jpeg"
              width={280}
              height={390}
              className="section-img"
              alt="c'est moi"
            />
        </div>
      </div>
      <div className="section2">
        <div className="container1-2">
          <h4 className="d-flex justify-content-start gap-3 text-red-1 fs-5">
            A PROPOS DE NOUS <div className="spanline align-self-center "></div>  
          </h4>
        </div>
        <h2 className="fs-3">RENCONTREZ A-CODERS : VOTRE PARTENAIRE 
          WEB POUR L'INNOVATION ET LA QUALITÉ</h2>
        <p className="mt-4">
          Bienvenue chez A-Coders ! Nous sommes une équipe de développeurs passionnés, 
          dédiés à créer des sites web exceptionnels et sur mesure. Notre approche repose sur la 
          qualité, l'innovation et la collaboration, et nous sommes là pour vous aider à 
          concrétiser vos ambitions en ligne. Rejoignez-nous dès aujourd'hui et laissez-nous 
          donner vie à votre vision sur le web.
        </p>
        <h5 className="title2">Découvrez notre équipe passionnée et notre engagement envers des sites web 
            d'exception. Chez A-Coders, votre succès en ligne est notre priorité.</h5>
        <button type="button" className="btn btn-danger mt-3">Danger</button>
      </div>
    </div>

    <div className="section3">
      <div className="container1-2">
        <h4 className="d-flex justify-content-center gap-3 text-red-1 fs-5">
          <div className="spanline align-self-center "></div>  
            NOS SERVICE
          <div className="spanline align-self-center"></div>
        </h4>
      </div>
      <h3>PLONGEZ DANS NOTRE ÉVENTAIL COMPLET DE SERVICES WEB INNOVANTS</h3>
      <div className="section3-1">
        <div className="row">
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BiGlobe className="icon"/>Location du Site Web</h5>
            <p> Notre service de location de site web offre une 
                solution abordable et sans engagement pour 
                établir votre présence en ligne. Profitez de 
                modèles professionnels personnalisés et d'une 
                maintenance continue.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BiCog className="icon"/>Maintenance d’un site web</h5>
            <p> Assurez la performance optimale de votre site 
                web avec notre service de maintenance. Nous 
                gérons les mises à jour, la sécurité et les 
                performances pour que vous puissiez vous 
                concentrer sur votre activité.</p>
            <a href="#">En savoir plus</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BiCode className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BiGlobe className="icon"/>Location du Site Web</h5>
            <p> Notre service de location de site web offre une 
                solution abordable et sans engagement pour 
                établir votre présence en ligne. Profitez de 
                modèles professionnels personnalisés et d'une 
                maintenance continue.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="col-sm-3 p-5" id="section3-3">
            <h5><BiCog className="icon"/>Maintenance d’un site web</h5>
            <p> Assurez la performance optimale de votre site 
                web avec notre service de maintenance. Nous 
                gérons les mises à jour, la sécurité et les 
                performances pour que vous puissiez vous 
                concentrer sur votre activité.</p>
            <a href="#">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>

    <div className="Partie-2">
      <div className="container1-2">
        <h4 className="d-flex justify-content-center gap-3 text-red-1 fs-5">
          <div className="spanline align-self-center "></div>  
            NOS EQUIPE
          <div className="spanline align-self-center"></div>
        </h4>
      </div>
      <h2>PLONGEZ DANS NOTRE ÉQUIPE: DES EXPERTS UNIS POUR RÉALISER VOS PROJETS WEB</h2>
      <div className="row" id="part2">
 
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
          <Image src="/accueil2.jpeg"
            width={260}
            height={220}
            className="d-block w-100"
            alt="c'est moi"
          />
    </div>
    <div class="carousel-item">
    <Image src="/accueil2.jpeg"
            width={260}
            height={220}
            className="d-block w-100"
            alt="c'est moi"
          />
    </div>
    <div class="carousel-item">
    <Image src="/accueil2.jpeg"
            width={260}
            height={220}
            className="d-block w-100"
            alt="c'est moi"
          />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
    </div>
    <div className="Partie-3">
      <div className="container1-2">
        <h4 className="d-flex justify-content-start gap-3 text-red-1 fs-5">
          A PROPOS DE NOUS <div className="spanline align-self-center "></div>  
        </h4>
      </div>
      <h2>
        EXPLOREZ NOTRE GALERIE DE RÉALISATIONS</h2>
      <div className="partie3">
        <div className="partie3-1"> 
          <div className="partie3-2">
            <Image
              src="/projet1.JPG"
              width={367}
              height={355}
              className=""
              alt="c'est moi"
            />
          </div>
          <div className="partie3-2">
            
          </div>
          <div className="partie3-2">
          
          </div>
        </div>
        <div className="partie3-1">
          <div className="partie3-2">
          
          </div>
          <div className="partie3-2">
          
          </div>
          <div className="partie3-2">

          </div>
        </div>
      </div>
    </div>

    <div className="Partie-4">
      <div className="container1-2">
        <h4 className="d-flex justify-content-center gap-3 text-red-1 fs-5">
          <div className="spanline align-self-center "></div>  
            QUESTIONS FRÉQUANTES
          <div className="spanline align-self-center"></div>
        </h4>
      </div>
      <h2>FAQ (FOIRE AUX QUESTIONS)</h2>
      <div className="partie4">
        <Image
          src="/accueil5.JPG"
          width={600}
          height={400}
          className="image ms-5 me-5"
          alt="c'est moi"
        />
        <div className="partie4-1">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Quels types de sites web pouvez-vous créer ?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 clclassNameass="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Combien de temps faut-il pour créer un site web ?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoOne" aria-expanded="false" aria-controls="flush-collapseTwoOne">
                Offrez-vous des services de maintenance après la création du site web ?
              </button>
            </h2>
            <div id="flush-collapseTwoOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoTwo" aria-expanded="false" aria-controls="flush-collapseTwoTwo">
              Comment puis-je obtenir un devis pour mon projet ?
              </button>
            </h2>
            <div id="flush-collapseTwoTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoThree" aria-expanded="false" aria-controls="flush-collapseTwoThree">
                Quels sont les modes de paiement acceptés ?
              </button>
            </h2>
            <div id="flush-collapseTwoThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Comment puis-je suivre les progrès de mon projet pendant le développement du site web ?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center" id="acc-conc">
      <div className="acc-conc">
          <h3 className="fs-2 mb-5">Contactez-nous</h3>
          <p>
            Que ce soit pour discuter de vos besoins d'impression 
            numérique, obtenir des informations supplémentaires sur nos 
            services, ou pour toute autre demande, l'équipe de Safa Jet est 
            à votre disposition. N'hésitez pas à nous contacter selon vos 
            préférences :
          </p>
          <div>
            <div className="mt-5">
            <FaMapMarkerAlt size={30} className="icon1"/>
            <span className="fw-bold">Centre-Ville, Rue de Berne, Djibouti</span>
            </div>
            <div>
            <FaPhone size={30}  className="icon1"/>
            <span className="fw-bold">+253 77 86 11 43 / +253 77 22 63 43</span>
            </div>
            <div>
            <FaEnvelope size={30}  className="icon1"/>
            <span className="fw-bold">safajetdjib@gmail.com</span>
            </div>
          </div>
      </div>
      <div className="form_contact">
        <Formulaire isVisible={isNavbarVisible} />
      </div>
    </div>
    <Footer isVisible={isNavbarVisible} />
    </section>
  );
}