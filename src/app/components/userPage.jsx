import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    });
    const handleAllUsers = () => {
        history.replace("/users");
    };
    if (user) {
        return <>
            <h1>{ user.name }</h1>
            <h2>Профессия { user.profession.name }</h2>
            <QualitiesList qualities={ user.qualities }/>
            <h5>Встретился раз: {user.completedMeetings}</h5>
            <h3>Оценка { user.rate }</h3>
            <button className="btn btn-outline-primary" onClick={ handleAllUsers }
            > Все пользователи
            </button>
        </>;
    } else {
       return <span>LOADING...</span>;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
