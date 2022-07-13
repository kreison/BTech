import ProductPage from './pages/productPage/ProductPage'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import HityPage from "./pages/hityPage/HityPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='product/:id' element={<ProductPage/>}/>
        <Route path='/hits' element={<HityPage/>}/>
    </Routes>


    </div>
  );
}

export default App;
