import React, { Fragment } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"


export default function App() {
    return (
        <Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/products" component={ProductsList}/>
            </Switch>
        </Fragment>
    );
}

