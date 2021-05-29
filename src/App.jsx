import Header from './components/Header'
import './app.css';
import Intro from './components/Intro';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import DetailProduct from './components/Products/DetailProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Authentication/Login';
import AddProduct from './components/DashBoard/AddProduct/AddProduct';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import ManageProduct from './components/DashBoard/ManageProduct/ManageProduct';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Intro />
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product/:id">
            <DetailProduct />
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <Route path="/chekout">
            <h1>Stripe payment method</h1>
          </Route>

          {/* <PrivateRoute path="/product/:id">
            // requires email from redux to work properly
            <DetailProduct />
            <Login></Login> 
            <DashBoard></DashBoard>
          </PrivateRoute> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
