import React from 'react';
import { Autoplay, Navigation, Virtual } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import Preview from "../../../components/preview/Preview";

const ProductSlider = ({data}) => {
    return (
        <div>
            <Swiper
            modules={[Navigation, Autoplay, Virtual]}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        // navigation: true

                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        // navigation: true
                    },
                    // when window width is >= 640px
                    940: {
                        slidesPerView: 4,
                        spaceBetween: 40

                    },
                    1000: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    }
                }
                }
                
                autoplay={{
                    delay: 2000
                }}
                navigation
                
            >
                {
                    data.length > 0
                        ?
                        data.map((todo) =>

                        <SwiperSlide key={todo.name} ><Preview todo={ todo } /></SwiperSlide>
                        )
                        :
                        null
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;