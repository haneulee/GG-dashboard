import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Summoner } from "../pages/Summoner";

const commonRoutes = [
    { path: "/", component: <Home /> },
    { path: "/search", component: <Summoner /> },
];

export const AppRouter = () => {
    return (
        <Router>
            <div className="flex flex-col bg-customGray">
                <Header />
                <Switch>
                    {commonRoutes.map((route) => (
                        <Route key={route.path} path={route.path} exact>
                            {route.component}
                        </Route>
                    ))}
                </Switch>
            </div>
        </Router>
    );
};