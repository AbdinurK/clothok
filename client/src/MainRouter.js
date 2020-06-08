import React, {Component} from "react";
import LandingPage from "./components/pages/LandingPage/LandingPage"
import ProductsList from "./components/pages/ProductsList/ProductsList";
import DesignLab from "./components/pages/DesignLab/DesignLab";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail"
import Configurator from "./components/Configurator/Configurator";
import { Route, Switch } from "react-router-dom";
import R1042 from "./components/R1042";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/products" exact component={ProductsList}/>
                    <Route path="/designLab" component={DesignLab}/>
                    <Route path="/products/:id" exact component={ProductDetail}/>
                    <Route path="/configurator" exact component={R1042}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
