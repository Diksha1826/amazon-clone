import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom' ;
import Home from './components/Home/Home'
import Products from './components/Product/Products'
import Innerprdt from './components/Innerproduct/Innerprdt';
import CartPage from './components/Cartpage/CartPage';
import Checkout from './components/Checkout/Checkoutpage';
import Signin from './components/Signin/Signin';
import Joinus from './Joinuspage/Joinus';
import Password from './components/Password/Password';
import Orderplaced from './components/Orderplaced/Orderplaced';
// import Headers from './components/Headers';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/products' element={ <Products />  } />
        <Route path='/products/:id' element={ <Innerprdt /> } />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signin' element={<Signin/>}  />
        <Route path='/joinus' element={<Joinus/>} />
        <Route path='/password' element={<Password />} />
        <Route path='/orderplaced' element={<Orderplaced />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
