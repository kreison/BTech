import React from 'react';
import Skidki from "../../components/skidki/Skidki";
import Popular from "../../components/popular/Popular";
import Slide from "../../components/popular/Slide";
import Hity from "../../components/popular/hity";
import SpecBlock from "../../components/specBlock/SpecBlock";
import PreimBlock from "../../components/preimushestva/PreimBlock";


const MainPage = () => {
    return (
        <div>
            <Skidki/>
            <Popular/>
            <Slide/>
            <Hity/>
            <SpecBlock/>
            <PreimBlock/>

        </div>
    );
};

export default MainPage;