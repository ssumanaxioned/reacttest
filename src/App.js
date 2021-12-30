import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Header from './Component/Header/Header';
import CartItems from './Pages/CartItems/CartItems';
import { useSelector } from 'react-redux';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  const { isLogin } = useSelector(state => state.loginReducer)

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/details/:item' component={ItemDetails} />
          <Route exact path='/cartitem'
            render={({ location }) =>
              isLogin ? (
                <CartItems />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
          <Route exact path='/:random/placeorder'
            render={({ location }) =>
              isLogin ? (
                <PlaceOrder />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
