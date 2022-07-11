import { Route, Routes } from 'react-router-dom';
import HityPage from './pages/hityPage/HityPage';
import MainPage from './pages/mainPage/MainPage';
import ProductPage from './pages/productPage/ProductPage'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={ <MainPage /> } />
          <Route path='/product/:id' element={ <ProductPage /> } />
          <Route path='/hits' element={ <HityPage /> } />
        </Routes>


    </div>
  );
}

export default App;
