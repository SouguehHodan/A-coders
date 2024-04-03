// components/ScrollAnimation.js
'use client'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function ScrollAnimation({ children, className }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(children.props.id);
      if (section && section.getBoundingClientRect().top < window.innerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [children.props.id]);

  return (
    <Link
      to={children.props.id}
      spy={true}
      smooth={true}
      duration={500}
      className={`${className} ${visible ? 'animate' : ''}`}
    >
      {children}
    </Link>
  );
}

export default ScrollAnimation;