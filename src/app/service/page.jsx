import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
import { BsCodeSlash } from 'react-icons/bs';
import '../styles/service.css';


const Propos = () => {

    const isNavbarVisible = true;
    const isFooterVisible = true;
    const isFormVisible = true;

    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
        <div className="service-img">
          <div className="text-white ps-5 pt-5" id="service">
            <h1 className="text-white fw-boldn mb-4 fs-1 text-uppercase">NOS SERVICE WEB</h1>
            <p className="text-white mb-5 fs-7">
                Découvrez notre gamme complète de services web conçus pour répondre à vos besoins
                numériques. De la conception à la mise en œuvre, nous sommes là pour vous accompagner à
                chaque étape de votre projet en ligne. Explorez nos services ci-dessous pour voir comment
                nous pouvons vous aider à atteindre vos objectifs sur le web.
            </p>
          </div>
        </div>
        <div className="container mt-4">
            <h4 className="d-flex justify-content-center gap-3 text-red-1 fs-5"><div className="spanline align-self-center "></div>  NOS SERVICE  <div className="spanline align-self-center"></div></h4>
            <p className="text-center fw-bolder fs-2 p-5">
                DÉCOUVREZ NOS SOLUTIONS WEB SUR MESURE, CONÇUES POUR <br />
                DONNER VIE À VOS PROJETS EN LIGNE AVEC EXCELLENCE ET INNOVATION
            </p>
        </div>

        <div>

        <div className="row bg-gris-clear" id="servi1">
            <div className="col-sm-6 pt-4 pb-5 order-sm-2">
                <h1 className=" text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Développement web
                </h1>
                <p className="servi1-p">
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
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Commencer maintenant</a>
            </div>
            <div className="col-sm-6 d-flex justify-content-center order-sm-1">
                <Image
                    src="/webcreation.png"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1 align-self-center"
                    alt="C'est moi"
                />
            </div>
        </div>

        <div className="container d-flex pt-4 pb-5 flex-wrap">
            <div className="col-sm-6 order-sm-1">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Location de site web
                </h1>
                <p className="mt-5">
                    Notre service de location de site web offre une solution flexible et abordable pour établir votre présence en ligne sans les coûts initiaux élevés associés au développement traditionnel de site web. Avec notre vaste sélection de modèles professionnels, nous personnalisons votre site web selon vos besoins spécifiques, puis le mettons en ligne rapidement. Profitez de la maintenance continue incluse dans votre abonnement pour assurer le bon fonctionnement de votre site web à tout moment, sans tracas ni frais supplémentaires. Choisissez la location de site web avec ACoders et concentrez-vous sur la croissance de votre entreprise, sans vous soucier de la gestion technique de votre site web.
                </p>
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Découvrez nos offres de location </a>
            </div>
            <div className="col-sm-6 text-center order-sm-2">
                <Image
                    src="/locations.jpg"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1"
                    alt="C'est moi"
                />
            </div>
        </div>

        <div className="row bg-gris-clear" id="servi1">
            <div className="col-sm-6 pt-4 pb-5 order-sm-2">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Maintenance d’un site web
                </h1>
                <p className="servi1-p">
                    Notre service de maintenance de site web vous assure une
                    tranquillité d'esprit totale en veillant au bon fonctionnement 
                    continu de votre présence en ligne. Nous prenons en charge 
                    toutes les tâches techniques nécessaires, y compris les mises à 
                    jour régulières, la surveillance de la sécurité et la résolution 
                    des problèmes potentiels, afin que vous puissiez vous 
                    concentrer sur le développement de votre entreprise. Avec des 
                    plans de maintenance flexibles et adaptés à vos besoins, nous 
                    sommes là pour protéger votre site web et garantir une 
                    expérience utilisateur optimale pour vos visiteurs. Optez pour 
                    notre service de maintenance de site web et laissez-nous 
                    prendre soin de votre site, pendant que vous vous concentrez 
                    sur la croissance de votre activité.
                </p>
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Protégez votre site web aujourd'hui</a>
            </div>
            <div className="col-sm-6 d-flex justify-content-center order-sm-1">
                <Image
                    src="/design.png"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1 align-self-center"
                    alt="C'est moi"
                />
            </div>
        </div>

        <div className="container d-flex pt-4 pb-5 flex-wrap">
            <div className="col-sm-6 order-sm-1">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Design Web
                </h1>
                <p className="mt-5">
                    Notre service de conception web allie esthétique et
                    fonctionnalité pour créer des expériences en ligne captivantes. 
                    Grâce à une approche centrée sur l'utilisateur et à une maîtrise 
                    des dernières tendances en matière de design, nous 
                    concevons des interfaces utilisateur intuitives qui reflètent 
                    l'identité de votre marque et attirent votre public cible. Que
                    vous recherchiez une refonte complète de votre site existant 
                    ou une création à partir de zéro, notre équipe de designers 
                    talentueux est là pour donner vie à votre vision. Avec une 
                    attention méticuleuse aux détails et un engagement envers 
                    l'excellence esthétique, nous sommes votre partenaire idéal 
                    pour transformer vos idées en designs web époustouflants.
                </p>
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Explorez nos créations</a>
            </div>
            <div className="col-sm-6 text-center order-sm-2">
                <Image
                    src="/maintenance.png"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1"
                    alt="C'est moi"
                />
            </div>
        </div>

        <div className="row bg-gris-clear" id="servi1">
            <div className="col-sm-6 pt-4 pb-5 order-sm-2">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Service SEO (Optimisation pour les moteurs de recherche)
                </h1>
                <p className="mt-5">
                Notre service SEO (Optimisation pour les moteurs de 
                recherche) vise à améliorer la visibilité de votre site web dans 
                les résultats de recherche organiques. Grâce à une 
                combinaison de stratégies de référencement on-page et offpage, 
                nous travaillons à augmenter le classement de votre site
                web sur les moteurs de recherche tels que Google, Bing et 
                Yahoo. Que vous cherchiez à augmenter le trafic vers votre site 
                web, à améliorer votre positionnement par rapport à vos 
                concurrents ou à attirer des clients potentiels, notre équipe 
                expérimentée en SEO est là pour vous aider à atteindre vos
                objectifs en ligne.
                </p>
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Boostez votre visibilité</a>
            </div>
            <div className="col-sm-6 d-flex justify-content-center order-sm-1">
                <Image
                    src="/seo.png"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1 align-self-center"
                    alt="C'est moi"
                />
            </div>
        </div>
        <div className="container d-flex pt-4 pb-5 flex-wrap">
            <div className="col-sm-6 order-sm-1">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Service d'Analyse de Données
                </h1>
                <p className="mt-5">
                Notre service d'analyse de données offre des insights précieux
                pour guider vos décisions commerciales et optimiser vos 
                performances en ligne. En utilisant des outils avancés 
                d'analyse et de suivi, nous collectons et interprétons les
                données clés de votre site web, des médias sociaux et d'autres 
                sources pertinentes. Que vous recherchiez à comprendre le
                comportement de vos utilisateurs, à identifier les tendances 
                du marché ou à évaluer l'efficacité de vos campagnes
                marketing, notre équipe d'analystes de données expérimentés 
                est là pour vous fournir les informations nécessaires pour
                prendre des décisions éclairées et stratégiques.
                </p>
                <a href="/contact" className="btn btn-red" role="button" id='btn'>Optimisez vos performances maintenant</a>
            </div>
            <div className="col-sm-6 text-center order-sm-2">
                <Image
                    src="/conception.jpg"
                    width={600}
                    height={400}
                    layout="responsive"
                    className="img1"
                    alt="C'est moi"
                />
            </div>
        </div>

        </div>
        <div className="w-100 container bg-gris-fonce rounded-10px mb-5">
            <Formulaire isVisible={isNavbarVisible} />
        </div>
      <Footer isVisible={isNavbarVisible} />
        </section>
        )
    }
export default Propos;