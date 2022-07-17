import React from 'react';
import Skidki from "../../components/MainPage/skidki/Skidki";
import Popular from "../../components/MainPage/popular/Popular";
import Slide from "../../components/MainPage/popular/Slide";
import Hity from "../../components/MainPage/popular/Hity";
import SpecBlock from "../../components/MainPage/specBlock/SpecBlock";
import PreimBlock from "../../components/MainPage/preimushestva/PreimBlock";
import Partnery from "../../components/MainPage/partnery/Partnery";
import SwiperMainPage from '../../components/MainPage/SliderMainPage/SliderMainPage'


const MainPage = () => {
    return (
        <div>
            <SwiperMainPage/>
            <Skidki />
            <div className="container">
                <Popular />
                <Slide />
            </div>
            
            <Hity />
            <SpecBlock />
            <PreimBlock />
            <Partnery />

        </div>
    );
};

export default MainPage;