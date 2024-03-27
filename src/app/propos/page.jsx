import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"

const Propos = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
        <div className="propos-img">
          <div className="text-white ps-5 pt-5" id="propos">
            <h1 className="text-white fw-boldn mb-4 fs-1">A PROPOS DE NOUS</h1>
            <p className="text-white mb-5 fs-5">
              Explorez notre histoire, notre équipe et notre engagement envers 
              l'excellence en ligne. Chargement en cours...
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Image
              src="/accueil4.jpeg"
              width={490}
              height={700}
              className="img-propos"
              alt="c'est moi"
            />
            <Image
            src="/accueil2.jpeg"
            width={500}
            height={350}
            className="img-propos1"
            alt="c'est moi"
            />
          </div>
          <div className="col-sm-6">
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
            <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
          </div>
        </div>

        <div className="pro-sec2">
          <h4>PLONGEZ DANS NOTRE ÉQUIPE: DES EXPERTS UNIS POUR RÉALISER VOS PROJETS WEB</h4>
          <p>
            Chez A-Coders, nous formons une équipe dynamique et passionnée, unie par notre amour commun pour le web et notre engagement à offrir des solutions numériques de 
            qualité supérieure. Forts d'une diversité de compétences et d'expériences, nous sommes parfaitement positionnés pour relever les défis les plus complexes et donner vie à 
            des projets numériques innovants. Que ce soit dans le développement back-end, le développement front-end, le design graphique ou la maquette web, nous avons les 
            compétences nécessaires pour créer des solutions sur mesure qui répondent aux besoins uniques de chaque client. Explorez notre équipe et découvrez les technologies que 
            nous maîtrisons pour donner vie à vos idées sur le web.
          </p>

          <div className="part2">
            <div className="part2-1">
              <Image
                src="/perso1.jpg"
                width={220}
                height={250}
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
                src="/perso1.jpg"
                width={220}
                height={250}
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
                src="/perso2.jpg"
                width={220}
                height={250}
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
                src="/perso1.jpg"
                width={220}
                height={250}
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
          <h4>NOS PROJETS RÉALISER</h4>
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
      </section>
        )
    }
export default Propos;