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
        <div>

          <div>
            <Image
              src="/accueil3.jpg"
              width={550}
              height={700}
              className="img-propos"
              alt="c'est moi"
            />
            <Image
            src="/accueil3.jpg"
            width={680}
            height={500}
            className="img-propos1"
            alt="c'est moi"
            />
          </div>
          <div>
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
          </div>
          <button>voir nos réalisation</button>
        </div>
      </section>
        )
    }
export default Propos;