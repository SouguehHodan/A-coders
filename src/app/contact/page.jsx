import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"

const Contact = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;
  
    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />

        
        <div className="propos-img d-flex justify-content-center" id="section1">
          <div className="text-white d-flex flex-column align-items-center justify-content-center w-100 pt-4" id="propos">
            <h1 className="text-white fw-boldn mb-4 fs-1 text-uppercase">parlons ensemble</h1>
            <p className="text-white mb-5 fs-7">
              Découvrez notre portfolio inspirant.Explorez nos créations pour vous  <br />inspirer et découvrir notre expertise en action.
            </p>
          </div>
        </div>
        
        <div className=" container w-100 d-flex flex-wrap gap-5" id="section2">
          <div className="acc-conc">
            <h3 className="fs-1 mb-4">Contactez-nous</h3>
            <p className="fs-5">
              Que ce soit pour discuter de vos besoins d'impression 
              numérique, obtenir des informations supplémentaires sur nos 
              services, ou pour toute autre demande, l'équipe de Safa Jet est 
              à votre disposition. N'hésitez pas à nous contacter selon vos 
              préférences :
            </p>
            <div>
              <div className="p-2 d-flex gap-1">
              <Image 
                src="/map.png"
                width={30}
                height={30}
                className="mb-3 cursor-pointer"
              />
                <span className="fs-6 fw-bold" >Centre-Ville, Rue de Berne, Djibouti</span>
              </div>
              <div className="p-2 d-flex gap-1">
              <Image 
                src="/iconephone.png"
                width={30}
                height={30}
                className="mb-3 cursor-pointer"
              />
                <span className="fs-6 fw-bold" >+253 77 86 11 43 / +253 77 22 63 43</span>
              </div>
              <div className="p-2 d-flex gap-1">
              <Image 
                src="/emailicone.png"
                width={30}
                height={30}
                className="mb-3 cursor-pointer"
              />
                <span className="fs-6 fw-bold" >safajetdjib@gmail.com</span>
              </div>
            </div>
          </div>
           <div className="bg-gris-fonce rounded-10px mb-4 w-50" id="section2">
            <Formulaire isVisible={isNavbarVisible} />
           </div>
        </div>
        <Footer isVisible={isNavbarVisible} />
      </section>
        )
    }
export default Contact;