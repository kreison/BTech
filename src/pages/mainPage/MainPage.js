import React from 'react';
import Skidki from "../../components/skidki/Skidki";
import Popular from "../../components/popular/Popular";
import Slide from "../../components/popular/Slide";
import Hity from "../../components/popular/Hity";
import SpecBlock from "../../components/specBlock/SpecBlock";
import PreimBlock from "../../components/preimushestva/PreimBlock";
import Partnery from "../../components/partnery/Partnery";
import SwiperMainPage from '../../components/SliderMainPage/SliderMainPage'


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