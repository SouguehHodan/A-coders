import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
// import ScrollAnimation from '@/components/animation/animations';
import '../styles/contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

    return (
      <section>
        {/* <ScrollAnimation> */}
        <Navbar isVisible={isNavbarVisible} />
        <div className="contact-img">
          <div className="text-white ps-5 pt-5" id="contact">
            <h1 className="text-white fw-boldn mb-4 fs-1 text-uppercase">parlons ensemble</h1>
            <p className="text-white mb-5 fs-7">
              Découvrez notre portfolio inspirant.Explorez nos créations pour vous  <br />inspirer et découvrir notre expertise en action.
            </p>
          </div>
        </div>
        <div className="container w-100 d-flex flex-wrap gap-5">
          <div className="acc_conc">
            <h3 className="fs-1 mb-4">Contactez-nous</h3>
            <p>
              Que ce soit pour discuter de vos besoins d'impression 
              numérique, obtenir des informations supplémentaires sur nos 
              services, ou pour toute autre demande, l'équipe de Safa Jet est 
              à votre disposition. N'hésitez pas à nous contacter selon vos 
              préférences:
            </p>
            <div>
              <div className="p-2">
              <FaMapMarkerAlt size={30} className="icon1"/>
              <span className="fw-bold fs-6 ms-3">Centre-Ville, Rue de Berne, Djibouti</span>
              </div>
              <div className="p-2">
              <FaPhone size={30}  className="icon1"/>
              <span className="fw-bold fs-6 ms-3">+253 77 86 11 43 / +253 77 22 63 43</span>
              </div>
              <div className="p-2">
              <FaEnvelope size={30}  className="icon1"/>
              <span className="fw-bold fs-6 ms-3">safajetdjib@gmail.com</span>
              </div>
            </div>
          </div>
           <div className="form_contact">
            <Formulaire isVisible={isNavbarVisible} />
           </div>
        </div>
        <Footer isVisible={isNavbarVisible} />
        {/* </ScrollAnimation> */}
      </section>
        )
    }
export default Contact;