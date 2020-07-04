import React, {Component} from "react";
import LandingPage from "./components/LandingPage/LandingPage"
import ProductsList from "./components/ProductsList/ProductsList";
import DesignLab from "./components/DesignLab/DesignLab";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import { Route, Switch } from "react-router-dom";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions"
import store from "./store";

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/products/:id" component={ProductDetail}/>
                    <Route exact path="/products" component={ProductsList}/>
                    <Route exact path="/designLab/:id" component={DesignLab}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
