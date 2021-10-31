import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Footer from "./components/Shared/Footer/Footer";
import ManageAllBookings from "./components/PrivatePages/ManageAllBookings.js/ManageAllBookings";
import MyBookings from "./components/PrivatePages/MyBookings/MyBookings";
import About from "./components/Pages/About/About";
import PlaceOrder from "./components/PrivatePages/PlaceOrder/PlaceOrder";
import AddNewService from "./components/PrivatePages/AddNewService/AddNewService";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">{/* <h1>User dashboard</h1> */}</Route>
          <PrivateRoute exact path="/my-bookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute exact path="/manage-all-bookings">
            <ManageAllBookings />
          </PrivateRoute>
          <PrivateRoute exact path="/add-service">
            <AddNewService />
          </PrivateRoute>
          <PrivateRoute exact path="/place-order/:id">
            <PlaceOrder />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
