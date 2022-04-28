import React from "react";
import UserPage from "./userPage";
import { useParams } from "react-router-dom";

const Main = () => {
  const params = useParams();
  const userId = params;
  return (<>
    { userId
        ? (<UserPage/>)
        : (<div>333</div>)
    }
  </>);
};

export default Main;
