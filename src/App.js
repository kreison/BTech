import ProductPage from './pages/productPage/ProductPage'
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import HityPage from "./pages/hityPage/HityPage";
import React, { useEffect } from "react";
import SignIn from './pages/Delivery/Delivery';
import FavoritePage from './pages/favoritePage/FavoritePage';
import BindCard from './pages/BindCard/BindCard';

function App() {
  useEffect(() => {
    if (localStorage.getItem('binded') === null) {
      localStorage.setItem('binded', false);
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route index element={ <MainPage /> } />
        <Route path='product/:id' element={ <ProductPage /> } />
        <Route path='/hits' element={ <HityPage /> } />
        <Route path='/delivery' element={ <SignIn /> } />
        <Route path='/fav' element={ <FavoritePage /> } />
        {
          localStorage.getItem('binded') === 'false'
            ?
            <Route path='/bind' element={ <BindCard /> } />
            :
            null
        }
      </Routes>


    </div>
  );
}

export default App;
