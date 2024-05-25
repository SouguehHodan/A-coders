"use client"
// src/components/TrandingSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const TrandingSlider = () => {
  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="container">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="tranding-slider"
        >
          <SwiperSlide className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <Image src="/accueil3.jpg" alt="Tranding" width={370} height={420} className='img'/>
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <Image src="/accueil5.JPG" alt="Tranding" width={370} height={420} className='img'/>
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <Image src="/accueil5.JPG" alt="Tranding" width={370} height={420} className='img'/>
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <Image src="/accueil5.JPG" alt="Tranding" width={370} height={420} className='img'/>
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <Image src="/accueil5.JPG" alt="Tranding" width={370} height={420} />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          {/* Répétez les SwiperSlide pour les autres items */}
          {/* ... */}
         
        </Swiper>
      </div>
    </section>
  );
};

export default TrandingSlider;