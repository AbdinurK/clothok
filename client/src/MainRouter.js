import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner"
import ProductsList from "./pages/ProductsList/ProductsList";
import DesignLab from "./pages/DesignLab/DesignLab";
import ProductDetail from "./pages/ProductDetail/ProductDetail"


class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Banner}/>
                    <Route path="/products" exact component={ProductsList}/>
                    <Route path="/designLab" component={DesignLab}/>
                    <Route path="/products/:id" exact component={ProductDetail}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
