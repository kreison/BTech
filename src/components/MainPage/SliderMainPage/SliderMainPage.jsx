import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import SliderMainPageItem from './SliderMainPageItem/SliderMainPageItem';
import cl from './slider.module.css'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { CircularProgress } from '@mui/material';

SwiperCore.use([Navigation, Pagination]);

const SliderMainPage = () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=3"
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {setData(data.results)})
    }, [])
    
    return (
        <div className={ cl.slider }>
            <div className="container">
                <Swiper
                    spaceBetween={ 100 }
                    slidesPerView={ 1 }
                    modules={[Navigation, Autoplay]}
                    
                    loop
                    navigation
                    className={cl.swiper}
                    autoplay={{
                        delay: 3000,
                    }}
                >

                    {
                        data.length === 0
                        ?
                        <CircularProgress/>
                        :
                        data.map(item => <SwiperSlide  key={ item.name }><SliderMainPageItem className={cl.slide} info={ item.url } /></SwiperSlide>)
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default SliderMainPage;