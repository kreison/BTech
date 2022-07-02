import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./mainPage/MainPage";

const MainPages = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainPages;