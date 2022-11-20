import React from 'react';
import './testemonials.css';
import AVTR from '../../assets/me.png';
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'


const Testemonials = () => {
  return (
    <section id='testemonials'>
           <h5>Review from clients</h5>
           <h2>Testimonials</h2>
           <Swiper 
            modules={[ Pagination ]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
           className="container testimonials__container">
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR} alt="Avatar One" />
              </div>
              <h5 className="client__name">Kally Moller1</h5>
              <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ante sit amet nulla porttitor aliquam ut non sapien. Cras.
              </small>
            </SwiperSlide>
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR} alt="Avatar Two" />
              </div>
              <h5 className="client__name">Kally Moller2</h5>
              <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ante sit amet nulla porttitor aliquam ut non sapien. Cras.
              </small>
            </SwiperSlide>
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR} alt="Avatar One" />
              </div>
              <h5 className="client__name">Kally Moller3</h5>
              <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ante sit amet nulla porttitor aliquam ut non sapien. Cras.
              </small>
            </SwiperSlide>
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR} alt="Avatar One" />
              </div>
              <h5 className="client__name">Kally Moller4</h5>
              <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ante sit amet nulla porttitor aliquam ut non sapien. Cras.
              </small>
            </SwiperSlide>
           </Swiper>

    </section>
  )
}

export default Testemonials