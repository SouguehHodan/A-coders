import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"


const Portfolio = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

    return (
      <section>
        <Navbar isVisible={isNavbarVisible} />
        <div className="propos-img">
          <div className="text-white ps-5 pt-5" id="propos">
            <h1 className="text-white fw-boldn mb-4 fs-1 text-uppercase">nos réalisations</h1>
            <p className="text-white mb-5 fs-7">
              Découvrez notre portfolio inspirant.Explorez nos créations pour vous  <br />inspirer et découvrir notre expertise en action.
            </p>
          </div>
        </div>
        <div className="container">
          <h2 className="text-uppercase text-center p-4">
            nos projets réaliser
          </h2>
          <div className="d-flex gap-5 flex-wrap justify-content-center mb-4">
            <div className="card divborn">
              <img src="/projet1.jpg" alt="photo projet1" className="img" />
              <button className="btn btn-red posA">Découvrir</button>
            </div>
            <div className="card divborn"></div>
            <div className="card divborn"></div>
            <div className="card divborn"></div>
            <div className="card divborn"></div>
            <div className="card divborn"></div>
          </div>
        </div>
          <div className="container">
            <div className="w-100 bg-gris-fonce rounded-10px mb-5">
              <Formulaire isVisible={isNavbarVisible} />
            </div>
          </div>
        
        <Footer isVisible={isNavbarVisible} />
      </section>
        )
    }
export default Portfolio;