import React from "react";
import {Route, Redirect, Routes} from "react-router-dom";
import {isLogin} from "./cookies";
import Layout from "../views/Layout"; // cookies
const PrivateRouter =({component,...rest})=>{
    return (
        // <Route  {...rest} component={component}></Route>
        // <Route
        //     {...rest}
        //     render={routeProps => (
        //         isLogin() ?  <Component {...routeProps}/>:<Redirect to="/" />)}
        // />
    )
}
export default PrivateRouter