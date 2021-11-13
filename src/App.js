import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Products from './Pages/Home/Products/Products';
import Reviews from './Pages/Home/Reviews/Reviews';
import Error from './Pages/Error/Error';
import AuthProvider from './context/AuthProvider';
import Purchase from './Pages/Private/Purchase/Purchase';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Private/Dashboard/Dashboard';
import Details from './Pages/Details/Details';
import AllProducts from './Pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
