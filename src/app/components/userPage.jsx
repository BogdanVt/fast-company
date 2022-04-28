import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const UserPage = ({ id, users }) => {
    const history = useHistory();
    const getUserById = (id) => {
        return Object.keys(users).find((user) => user._id.toString() === id);
    };
    const handleAllUsers = () => {
        history.replace("/users");
    };
    const user = getUserById(id);
    return <>
        <h2>{ user ? user.label : `User with id:${id} not found` } </h2>;
        <button onClick={ () => {
            handleAllUsers();
        } }
        >
            all users
        </button>
    </>;
};

UserPage.propTypes = {
    users: PropTypes.array,
    id: PropTypes.string
};
export default UserPage;
