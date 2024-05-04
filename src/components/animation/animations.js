'use client'
// // components/ScrollMagicComponent.js

// import React, { useEffect } from "react";
// import ScrollMagic from 'scrollmagic';
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"; // Optionnel : pour le débogage
// import gsap from "gsap";
// import '../app/styles/animation.css';

// const ScrollMagicComponent = () => {
//   useEffect(() => {
//     // Créer une instance de ScrollMagic Controller
//     const controller = new ScrollMagic.Controller();

//     // Créer une scène ScrollMagic
//     new ScrollMagic.Scene({
//       triggerElement: ".trigger", // L'élément qui déclenchera l'animation
//       triggerHook: 0.8, // Le point de déclenchement de l'animation (0.8 signifie 80% de la fenêtre visible)
//       reverse: false, // L'animation ne se répétera pas lors du défilement vers le haut
//     })
//       .setTween(".animate", { opacity: 1, y: -50, duration: 1 }) // Animation TweenMax avec GSAP
//       .addIndicators() // Optionnel : Ajoute des indicateurs pour le débogage
//       .addTo(controller); // Ajouter la scène au contrôleur
//   }, []);

//   return (
//     <div className="trigger">
//       <div className="animate">Animate Me</div>
//     </div>
//   );
// };

// export default ScrollMagicComponent;


// components/ScrollAnimation.js
// components/ScrollAnimation.js
import { useEffect } from 'react';
import '../animation/animation.css';

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Vous pouvez ajuster ces valeurs selon vos besoins
      const threshold = 50; // La distance à partir du haut de la page où l'animation doit commencer
      const fadeElements = document.querySelectorAll('.fade-in'); // Les éléments à animer
      fadeElements.forEach((element) => {
        const elementOffset = element.offsetTop;
        if (scrollTop > elementOffset - threshold) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appeler la fonction pour vérifier l'état initial
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimation;
