import MainPages from './pages/MainPages';
import ProductPage from "./pages/productPage/ProductPage";
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.App}>
      <MainPages />
      <ProductPage/>
    </div>
  );
}

export default App;
