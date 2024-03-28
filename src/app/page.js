import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
import { Span } from "next/dist/trace";
import { BsCodeSlash } from 'react-icons/bs';

export default function Home() {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

  return (
    <section>
    <Navbar isVisible={isNavbarVisible} />
    <div className="accueil-img">
        <div className="text-white ps-5 pt-5" id="accueil">
          <h1 className="text-white fw-boldn mb-4"><span className="acc-colo">A-CODERS</span>, VOTRE PARTENAIRE POUR 
          <span className="acc-colo"> DES SITES WEB EXTRAORDINAIRES</span></h1>
          <p className="text-white mb-5">
            Notre approche innovante du développement web combine les dernières 
            technologies avec une conception visuelle époustouflante, pour vous offrir 
            un site web qui se démarque dans un monde numérique en constante 
            évolution
          </p>
          <div className="button2">
          <button type="button" class="btn btn-danger me-3">Danger</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
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
        <button type="button" class="btn btn-danger mt-3">Danger</button>
      </div>
    </div>

    <div className="section3">
      <h3>PLONGEZ DANS NOTRE ÉVENTAIL COMPLET DE SERVICES WEB INNOVANTS</h3>
      <div className="section3-1">
        <div className="section3-2">
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
        </div>
        <div className="section3-2">
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
          <div className="section3-3">
            <h5><BsCodeSlash className="icon"/>Developpement Web</h5>
            <p> Notre service de développement web 
                transforme vos idées en sites web fonctionnels 
                et esthétiques, adaptés à vos besoins 
                spécifiques et à votre vision. Faites équipe avec 
                nous pour donner vie à votre présence en ligne.</p>
            <a href="#">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>

    <div className="Partie-2">
      <h2>PLONGEZ DANS NOTRE ÉQUIPE: DES EXPERTS UNIS POUR RÉALISER VOS PROJETS WEB</h2>
      <div className="part2">
        <div className="part2-1">
          <Image
            src="/perso1.JPG"
            width={320}
            height={350}
            className="ms-1 mb-5 mt-1"
            alt="c'est moi"
          />
          <br/>
          <span>Abdourahman</span>
          <br/>
          <span className="fonction">DEVELOPPEUR BACK-END</span>
        </div>
        <div className="part2-1">
          <Image
            src="/perso1.JPG"
            width={320}
            height={350}
            className="ms-1 mb-5 mt-1"
            alt="c'est moi"
          />
          <br/>
          <span>Zakaria Ali</span>
          <br/>
          <span className="fonction">GRAPHIC DESIGNER MAQUETTISTE</span>
        </div>
        <div className="part2-1">
          <Image
            src="/perso2.JPG"
            width={320}
            height={350}
            className="ms-1 mb-5"
            alt="c'est moi"
          />
          <br/>
          <span>Habon Soule</span>
          <br/>
          <span className="fonction">DEVELOPPEUSE FRONT-END</span>
        </div>
        <div className="part2-1">
          <Image
            src="/perso1.JPG"
            width={320}
            height={350}
            className="ms-1 mb-5 my-1"
            alt="c'est moi"
          />
          <br/>
          <span>Ilyas OmaR</span>
          <br/>
          <span className="fonction">DEVELOPPEUR BACK-END</span>
        </div>
      </div>
    </div>
    <div className="Partie-3">
      <h2>EXPLOREZ NOTRE GALERIE DE RÉALISATIONS</h2>
      <div className="partie3">
        <div className="partie3-1"> 
          <div className="partie3-2">
            <Image
              src="/projet1.jpg"
              width={337}
              height={255}
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
      <h2>FAQ (FOIRE AUX QUESTIONS)</h2>
      <div className="partie4">
        <Image
          src="/accueil5.JPG"
          width={600}
          height={400}
          className="ms-5 me-5"
          alt="c'est moi"
        />
        <div className="partie4-1">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Quels types de sites web pouvez-vous créer ?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Combien de temps faut-il pour créer un site web ?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoOne" aria-expanded="false" aria-controls="flush-collapseTwoOne">
                Offrez-vous des services de maintenance après la création du site web ?
              </button>
            </h2>
            <div id="flush-collapseTwoOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoTwo" aria-expanded="false" aria-controls="flush-collapseTwoTwo">
              Comment puis-je obtenir un devis pour mon projet ?
              </button>
            </h2>
            <div id="flush-collapseTwoTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoThree" aria-expanded="false" aria-controls="flush-collapseTwoThree">
                Quels sont les modes de paiement acceptés ?
              </button>
            </h2>
            <div id="flush-collapseTwoThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Comment puis-je suivre les progrès de mon projet pendant le développement du site web ?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center" id="acc-conc">
      <div className="acc-conc">
          <h3 className="fs-2 mb-4">Contactez-nous</h3>
          <p>
            Que ce soit pour discuter de vos besoins d'impression 
            numérique, obtenir des informations supplémentaires sur nos 
            services, ou pour toute autre demande, l'équipe de Safa Jet est 
            à votre disposition. N'hésitez pas à nous contacter selon vos 
            préférences :
          </p>
          <div>
            <div>
            <Image
              src="/icon0.png"
              width={40}
              height={40}
              className="me-2 mb-2 mx-0 ms-0"
            />
            <span>Centre-Ville, Rue de Berne, Djibouti</span>
            </div>
            <div>
            <Image
              src="/icon9.png"
              width={25}
              height={25}
              className="me-4 mb-3 ms-1"
            />
            <span>+253 77 86 11 43 / +253 77 22 63 43</span>
            </div>
            <div>
            <Image
              src="/icon8.png"
              width={25}
              height={25}
              className="me-4 ms-1"
            />
            <span>safajetdjib@gmail.com</span>
            </div>
          </div>
      </div>
      <div className="w-50">
        <Formulaire isVisible={isNavbarVisible} />
      </div>
    </div>
    <Footer isVisible={isNavbarVisible} />
    </section>
  );
}
