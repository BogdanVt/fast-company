import React, { useEffect } from "react";

import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    useEffect(() => {}, [isAuth]);
    return (
        <Card>
            <Component
                {...props}
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
            />
        </Card>
    );
};
export default withFunctions;
