import ProductPage from './pages/productPage/ProductPage'
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import HityPage from "./pages/hityPage/HityPage";
import React, { useEffect } from "react";
import SignIn from './pages/Delivery/Delivery';
import FavoritePage from './pages/favoritePage/FavoritePage';
import BindCard from './pages/BindCard/BindCard';
import LoginPage from './pages/loginPage/LoginPage';
import PinLoginPage from './pages/loginPage/PinLoginPages';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';

function App() {
  const email = useSelector(state => state.userReducer);
  useEffect(() => {
    if (localStorage.getItem('binded') === null) {
      localStorage.setItem('binded', false);
    }

  }, [])
  return (
    <div className="App">
      <Header/>
      <Routes>
        
        <Route index element={ <MainPage /> } />
        <Route path='product/:id' element={ <ProductPage /> } />
        <Route path='/hits' element={ <HityPage /> } />
        <Route path='/delivery' element={ <SignIn /> } />
        <Route path='/fav' element={ <FavoritePage /> } />
        <Route path='/sign' element={ <LoginPage /> } />
        {
          localStorage.getItem('user') === ''
            ?
            null
            :
            <Route path={ `/sign/message/:email` } element={ <PinLoginPage /> } /> 
        }
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
