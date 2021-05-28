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
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

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
          <Route path="/product/:id">
            <DetailProduct />
            <Login></Login>
          </Route>
          {/* <PrivateRoute>

          </PrivateRoute> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
