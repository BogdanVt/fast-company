<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
=======
import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Loader from "../../common/loader";
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

<<<<<<< HEAD
const UserPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    return (
      <>
        <div className="container">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserCard user={userInfo} />
              <QualitiesCard data={userInfo.qualities} />
              <MeetingsCard value={userInfo.completedMeetings} />
            </div>
            <div className="col-md-8">
              <Comments />
            </div>
          </div>
        </div>
      </>
    );
  }

  return "loading...";
=======
const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    return (
        <div className="container">
            { user
                ? (
                    <div key={user._id} className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserCard
                                user={user}
                            />
                            <QualitiesCard
                                data={user.qualities}
                            />
                            <MeetingsCard
                                value={user.completedMeetings}
                            />
                        </div>
                        <div className="col-md-8">
                            <Comments />
                        </div>
                    </div>
                )
                : (
                    <Loader />
                )}
        </div>
    );
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

UserPage.propTypes = {
  id: PropTypes.string,
};
export default UserPage;
