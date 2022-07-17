import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from '../../../picture/pic1.png'
import slide2 from '../../../picture/pic2.png'
import slide3 from '../../../picture/pic3.png'
import cl from './SpecBlock.module.css'



export default () => {
    return (
        <div className={ cl.ololow }>
            <Swiper
                breakpoints={ {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        slidesPerView: 2.1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    800: {
                        slidesPerView: 1.1,
                        slidesPerView: 2.1,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    1174: {
                        slidesPerView: 2.1,
                        spaceBetween: 40
                    },
                    1000: {
                        slidesPerView: 3.6,
                        spaceBetween: 40
                    },
                    1800: {
                        slidesPerView: 4.5
                    }
                } }
                loop

            >
                <SwiperSlide className={ cl.slide }>
                    <img key={ slide1 } src={ slide1 } alt="iu" />
                </SwiperSlide>

                <SwiperSlide className={ cl.slide }>
                    <img key={ slide2 } src={ slide2 } alt="iu" />
                </SwiperSlide>

                <SwiperSlide className={ cl.slide }>
                    <img key={ slide3 } src={ slide3 } alt="iu" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};