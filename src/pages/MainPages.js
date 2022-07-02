import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './productPage/ProductPage';

const MainPages = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='product/:id' element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainPages;