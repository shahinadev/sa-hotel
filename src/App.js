import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Footer from "./components/Shared/Footer/Footer";
import MyBookings from "./components/MyBookings/MyBookings";
import ManageAllBookings from "./components/PrivatePages/ManageAllBookings.js/ManageAllBookings";
import AddNewRoom from "./components/PrivatePages/AddNewRoom/AddNewRoom";
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
          <Route path="/account">{/* <h1>User dashboard</h1> */}</Route>
          <PrivateRoute path="/my_bookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute path="/manage_all_bookings">
            <ManageAllBookings />
          </PrivateRoute>
          <PrivateRoute path="/add_a_new_room">
            <AddNewRoom />
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
