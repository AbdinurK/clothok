import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner"
import ProductsList from "./pages/ProductsList/ProductsList";
import DesignLab from "./pages/DesignLab/DesignLab";


class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Banner}/>
                    <Route path="/products" component={ProductsList}/>
                    <Route path="/designLab" component={DesignLab}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
