import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Preview from "../../../components/preview/Preview";

const ProductSlider = ({data}) => {
    return (
        <div>
            <Swiper
                breakpoints={{
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
                        slidesPerView: 5,
                        spaceBetween: 40
                    }
                }
                }
                loop
                // spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.length > 0
                        ?
                        data.map((todo) =>

                        <SwiperSlide><Preview key={todo.id} todo={ todo } /></SwiperSlide>
                        )
                        :
                        null
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;