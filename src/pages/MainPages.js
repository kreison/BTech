import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./mainPage/MainPage";
import ProductPage from './productPage/ProductPage';

const MainPages = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path='product/:id' element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainPages;