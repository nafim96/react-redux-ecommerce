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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
