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
                Découvrez notre gamme complète de services web conçus pour répondre à vos besoins <br />
                numériques. De la conception à la mise en œuvre, nous sommes là pour vous accompagner à <br />
                chaque étape de votre projet en ligne. Explorez nos services ci-dessous pour voir comment  <br />
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

        <div className="row bg-gris-clear">
            <div className="col-sm-6 pt-4 pb-5 order-sm-2">
                <h1 className="text-capitalize text-red-1">
                    <Image
                        src='/arrow.png'
                        width={50}
                        height={50}
                        className="marginR"
                    /> 
                    Développement web
                </h1>
                <p className="fw-bolder">
                    Notre service de développement web vous offre une expertise <br />
                    technique de pointe pour créer des sites web sur mesure qui <br />
                    captivent et convertissent. De la conception initiale à la mise <br />
                    en ligne, notre équipe de développeurs expérimentés travaille <br />
                    en étroite collaboration avec vous pour donner vie à vos idées <br />
                    en ligne. Que vous ayez besoin d'un site d'entreprise <br />
                    professionnel, d'une boutique en ligne convaincante ou d'une <br />
                    plateforme interactive engageante, nous sommes là pour vous <br />
                    guider à chaque étape du processus. Grâce à notre approche <br />
                    centrée sur le client et à notre engagement envers l'excellence <br />
                    technique, nous sommes votre partenaire idéal pour réussir <br />
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
                <p className="fw-bolder">
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

        <div className="row bg-gris-clear">
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
                <p className="fw-bolder">
                    Notre service de maintenance de site web vous assure une <br />
                    tranquillité d'esprit totale en veillant au bon fonctionnement <br />
                    continu de votre présence en ligne. Nous prenons en charge <br />
                    toutes les tâches techniques nécessaires, y compris les mises à <br />
                    jour régulières, la surveillance de la sécurité et la résolution <br />
                    des problèmes potentiels, afin que vous puissiez vous <br />
                    concentrer sur le développement de votre entreprise. Avec des <br />
                    plans de maintenance flexibles et adaptés à vos besoins, nous <br />
                    sommes là pour protéger votre site web et garantir une <br />
                    expérience utilisateur optimale pour vos visiteurs. Optez pour <br />
                    notre service de maintenance de site web et laissez-nous <br />
                    prendre soin de votre site, pendant que vous vous concentrez <br />
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
                <p className="fw-bolder">
                    Notre service de conception web allie esthétique et <br />
                    fonctionnalité pour créer des expériences en ligne captivantes. <br />
                    Grâce à une approche centrée sur l'utilisateur et à une maîtrise <br />
                    des dernières tendances en matière de design, nous <br />
                    concevons des interfaces utilisateur intuitives qui reflètent <br />
                    l'identité de votre marque et attirent votre public cible. Que <br />
                    vous recherchiez une refonte complète de votre site existant <br />
                    ou une création à partir de zéro, notre équipe de designers <br />
                    talentueux est là pour donner vie à votre vision. Avec une <br />
                    attention méticuleuse aux détails et un engagement envers <br />
                    l'excellence esthétique, nous sommes votre partenaire idéal <br />
                    pour transformer vos idées en designs web époustouflants. <br />
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

        <div className="row bg-gris-clear">
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
                <p className="fw-bolder">
                Notre service SEO (Optimisation pour les moteurs de <br />
                recherche) vise à améliorer la visibilité de votre site web dans <br />
                les résultats de recherche organiques. Grâce à une <br />
                combinaison de stratégies de référencement on-page et offpage, <br />
                nous travaillons à augmenter le classement de votre site <br />
                web sur les moteurs de recherche tels que Google, Bing et <br />
                Yahoo. Que vous cherchiez à augmenter le trafic vers votre site <br />
                web, à améliorer votre positionnement par rapport à vos <br />
                concurrents ou à attirer des clients potentiels, notre équipe <br />
                expérimentée en SEO est là pour vous aider à atteindre vos <br />
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
                <p className="fw-bolder">
                Notre service d'analyse de données offre des insights précieux <br />
                pour guider vos décisions commerciales et optimiser vos <br />
                performances en ligne. En utilisant des outils avancés <br />
                d'analyse et de suivi, nous collectons et interprétons les <br />
                données clés de votre site web, des médias sociaux et d'autres <br />
                sources pertinentes. Que vous recherchiez à comprendre le <br />
                comportement de vos utilisateurs, à identifier les tendances <br />
                du marché ou à évaluer l'efficacité de vos campagnes <br />
                marketing, notre équipe d'analystes de données expérimentés <br />
                est là pour vous fournir les informations nécessaires pour <br />
                prendre des décisions éclairées et stratégiques. <br />
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