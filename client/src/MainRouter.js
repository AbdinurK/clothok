import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import ProductsList from "./pages/ProductsList/ProductsList";
import DesignLab from "./pages/DesignLab/DesignLab";
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Configurator from "./components/Configurator/Configurator";


class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/products" exact component={ProductsList}/>
                    <Route path="/designLab" component={DesignLab}/>
                    <Route path="/products/:id" exact component={ProductDetail}/>
                    <Route path="/configurator" exact component={Configurator}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
