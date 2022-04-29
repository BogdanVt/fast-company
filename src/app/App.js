import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";

function App() {
    return (<>
            <NavBar/>
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
