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
import Login from './components/Login/Login';
// import DashBoard from './components/DashBoard/DashBoard';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Intro />
            <Products />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/product/:id">
            <DetailProduct />
            {/* login working perfectly */}
            <Login></Login> 
            {/* <DashBoard></DashBoard> */}
            <Admin></Admin>
          </Route>
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
    </UserContext.Provider>
  );
}

export default App;
