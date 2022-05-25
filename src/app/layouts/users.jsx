import React from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
=======
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";

const Users = () => {
    const { userId } = useParams();
    if (!userId) {
        return <Redirect from="/users" to="/users/67rdca3eeb7f6fgeed471815" />;
    }
    return <EditUserPage />;
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
};

export default Users;
