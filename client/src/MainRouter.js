import React, {Component} from "react";
import LandingPage from "./components/LandingPage/LandingPage"
import ProductsList from "./components/ProductsList/ProductsList";
import DesignLab from "./components/DesignLab/DesignLab";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import { Route, Switch } from "react-router-dom";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/products" exact component={ProductsList}/>
                    <Route path="/designLab/:id" component={DesignLab}/>
                    <Route path="/products/:id" exact component={ProductDetail}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
