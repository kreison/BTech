import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HityPage from './hityPage/HityPage';
import MainPage from "./mainPage/MainPage";
import ProductPage from './productPage/ProductPage';

const MainPages = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path='product/:id' element={<ProductPage/>}/>
                    <Route path='/hits' element={<HityPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainPages;