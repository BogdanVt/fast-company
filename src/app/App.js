import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
<<<<<<< HEAD

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
=======
import Users from "./layouts/users";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import UseCallbackExample from "./layouts/useCallback";
import MemoExample from "./layouts/memo";
import CloneElementExample from "./layouts/cloneElement";
import UseRefExample from "./layouts/useRef";
import UseMemoExample from "./layouts/useMemo";
import HOCLayout from "./layouts/hoc";
import ReactChildren from "./layouts/reactChildren";
import ContainerWrapper from "./components/common/container";

function App() {
    return (
        <>
            <NavBar />
            <ContainerWrapper>
                <Switch>
                    <Route path="/users/:userId?" component={Users} />
                    <Route path="/useCallback" component={UseCallbackExample} />
                    <Route path="/memo" component={MemoExample} />
                    <Route path="/useMemo" component={UseMemoExample} />
                    <Route
                        path="/cloneElement"
                        component={CloneElementExample}
                    />
                    <Route path="/hoc" component={HOCLayout} />
                    <Route path="/children" component={ReactChildren} />

                    <Route path="/useRef" component={UseRefExample} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </ContainerWrapper>
        </>
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
    );
}

export default App;
