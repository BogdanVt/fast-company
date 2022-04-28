import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";

function App() {
    return (<>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/users/:userId?" exact component={Users} />
                <Route path="/users" exact component={Users} />
            </Switch>
        </>
    );
}

export default App;
