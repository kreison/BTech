import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from '../../picture/smartfony.png'
import slide2 from '../../picture/naushniki.png'
import slide3 from '../../picture/notniki.png'
import slide4 from '../../picture/tv.png'
import slide5 from '../../picture/smart chasy.png'
import slide6 from '../../picture/stiralka.png'
import slide7 from '../../picture/holodilnik.png'
import slide8 from '../../picture/smartfony.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import SwiperCore, { Navigation } from "swiper";
import cl from './popular.module.css'

SwiperCore.use([Navigation])

export default () => {

    return (
        <div className={ cl.swipe }>
            <Swiper
                navigation
                spaceBetween={ 30 }
                breakpoints={ {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    940: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1000: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    }
                }
                }
                loop

            >
                <SwiperSlide>
                    <img key={ slide1 } src={ slide1 } alt="iu" />
                    <p>Смартфоны</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide2 } src={ slide2 } alt="iu" />
                    <p>Наушники</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide3 } src={ slide3 } alt="iu" />
                    <p>Ноутбуки</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide4 } src={ slide4 } alt="iu" />
                    <p>Телевизоры</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide5 } src={ slide5 } alt="iu" />
                    <p>Смарт Часы</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide6 } src={ slide6 } alt="iu" />
                    <p>Стиральные машины</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide7 } src={ slide7 } alt="iu" />
                    <p>Холодильники</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={ slide8 } src={ slide8 } alt="iu" />
                    <p>Смартфоны</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};