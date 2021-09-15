import Loading from "src/lottie/lottie-loading.json"
import Lottie from "react-lottie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "src/components/common/ErrorFallback";
import { Header } from "src/components/Header";
import { Home } from "src/pages/Home";
import { Summoner } from "src/pages/Summoner";
import { Suspense } from "react";

const commonRoutes = [
    { path: "/", component: <Home /> },
    { path: "/search", component: <Summoner /> },
];

export const AppRouter = () => {
    return (
        <Router>
            <div className="flex flex-col bg-customGray min-w-min">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<Lottie
                        options={{ animationData: Loading }}
                        style={{ width: '100%', height: '100%' }}
                    />}>
                        <Header />
                        <Switch>
                            {commonRoutes.map((route) => (
                                <Route key={route.path} path={route.path} exact>
                                    {route.component}
                                </Route>
                            ))}
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </Router>
    );
};