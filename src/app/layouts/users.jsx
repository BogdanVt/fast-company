import React from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage/userPage";
import Edit from "../components/page/edit";
import UserProvider from "../hooks/useUsers";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      <UserProvider>
        {!userId ? (
          <UsersListPage />
        ) : edit ? (
          <Edit id={userId} />
        ) : (
          <UserPage id={userId} />
        )}
      </UserProvider>
    </>
  );
=======
import { useParams } from "react-router";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import EditUserPage from "../components/page/editUserPage/editUserPage";
import UserProvider from "../hooks/useUsers";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <UserProvider>
                {userId ? (
                    edit ? (
                        <EditUserPage />
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserProvider>
        </>
    );
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default Users;
