"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import Formulaire from "@/components/Formulaire/form"
import './switers.css';
import {useState ,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { FaFacebook, FaLinkedin , FaInstagram } from 'react-icons/fa';


const Swipere = () => {

  const isNavbarVisible = true;
  const isFooterVisible = true;
  const isFormVisible = true;

    useEffect(() => {
        const swiper = new Swiper('.tranding-slider', {
        modules: [EffectCoverflow, Pagination],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
        });
    }, []);
    return (
            <section id="tranding">
            <div class="container">
            <h3 class="text-center section-subheading">- popular Delivery -</h3>
            <h1 class="text-center section-heading">Tranding food</h1>
            </div>
            <div class="container">
            <div class="swiper tranding-slider">
                <div class="swiper-wrapper">
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$20</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Special Pizza
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$20</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Meat Ball
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$40</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Burger
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$15</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Frish Curry
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$15</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Pane Cake
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$20</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Vanilla cake
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide tranding-slide">
                    <div class="tranding-slide-img">
                    <Image
                        src="/accueil4.jpeg"
                        width={390}
                        height={650}
                        className="img-propos"
                        alt="c'est moi"
                    />
                    </div>
                    <div class="tranding-slide-content">
                    <h1 class="food-price">$8</h1>
                    <div class="tranding-slide-content-bottom">
                        <h2 class="food-name">
                        Straw Cake
                        </h2>
                        <h3 class="food-rating">
                        <span>4.5</span>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>
    
                <div class="tranding-slider-control">
                <div class="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div class="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div class="swiper-pagination"></div>
                </div>
    
            </div>
            </div>
            <div>
                <Script src="https://unpkg.com/swiper@8/swiper-bundle.min.js" strategy="beforeInteractive" />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
                />
                <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js">
                </script>
                <script
                    nomodule
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js">
                </script>
            </div>
        </section>
        )
    }
export default Swipere;