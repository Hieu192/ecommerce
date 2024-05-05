import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/pages/HomePage/HomePage';
import Product from './customers/components/Product/Product';
import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Footer from './customers/components/Footer/Footer';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/CheckOut/Checkout';
import Order from './customers/components/Order/Order';
import OrderDetails from './customers/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
