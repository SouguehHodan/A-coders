import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
import { BsCodeSlash } from 'react-icons/bs';


const Propos = () => {

    const isNavbarVisible = true;
    const isFooterVisible = true;
    const isFormVisible = true;

    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
        <div className="propos-img">
          <div className="text-white ps-5 pt-5" id="propos">
            <h1 className="text-white fw-boldn mb-4 fs-1">NOS SERVICE WEB</h1>
            <p className="text-white mb-5 fs-5">
                Découvrez notre gamme complète de services web conçus pour répondre à vos besoins 
                numériques. De la conception à la mise en œuvre, nous sommes là pour vous accompagner à 
                chaque étape de votre projet en ligne. Explorez nos services ci-dessous pour voir comment 
                nous pouvons vous aider à atteindre vos objectifs sur le web.
            </p>
          </div>
        </div>
        <div>
            <h4>NOS SERVICE</h4>
            <p>
                DÉCOUVREZ NOS SOLUTIONS WEB SUR MESURE, CONÇUES POUR 
                DONNER VIE À VOS PROJETS EN LIGNE AVEC EXCELLENCE ET INNOVATION
            </p>
        </div>

        <div>

            <div className="row">
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <p>
                        Notre service de développement web vous offre une expertise 
                        technique de pointe pour créer des sites web sur mesure qui 
                        captivent et convertissent. De la conception initiale à la mise 
                        en ligne, notre équipe de développeurs expérimentés travaille 
                        en étroite collaboration avec vous pour donner vie à vos idées 
                        en ligne. Que vous ayez besoin d'un site d'entreprise 
                        professionnel, d'une boutique en ligne convaincante ou d'une 
                        plateforme interactive engageante, nous sommes là pour vous 
                        guider à chaque étape du processus. Grâce à notre approche 
                        centrée sur le client et à notre engagement envers l'excellence 
                        technique, nous sommes votre partenaire idéal pour réussir 
                        sur le web.
                    </p>
                    <a  href="/contact" className="btn btn-dark" role="button" id='btn'>Rejoin nous</a>
                </div>
                <div className="col-sm-6">
                    <Image
                        src="/accueil2.jpeg"
                        width={250}
                        height={200}
                        className="img1"
                        alt="c'est moi"
                    />
                </div>
            </div>

        </div>
        <div>
            <Formulaire isVisible={isNavbarVisible} />
        </div>
      <Footer isVisible={isNavbarVisible} />
        </section>
        )
    }
export default Propos;