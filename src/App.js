import React from "react";
import NavBar from "./components/NavBar";
import {Redirect, Switch, Route} from "react-router-dom";
import {Home} from "./routers/Home";
import Clients from "./routers/Clients";
import Transactions from "./routers/Transactions";
import {AboutUs} from "./routers/AboutUs";
import {NotFound} from "./routers/NotFound";

const App = () => {
    return (
        <React.Fragment>

            <NavBar />

            <main className={"container"}>

                <Switch>
                    <Route path={"/home"} component={Home} />
                    <Route path={"/clients"} component={Clients} />
                    <Route path={"/transactions"} component={Transactions} />
                    <Route path={"/about-us"} component={AboutUs} />
                    <Route path={"/notfound"} to={NotFound} />
                    <Redirect from={"/"} exact to={"/home"} />
                    <Redirect to={"/notfound"} />
                </Switch>

            </main>

        </React.Fragment>
    );
}

export default App;