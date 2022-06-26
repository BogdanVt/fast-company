import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
<<<<<<< HEAD
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ userQualities }) => {
  const { isLoading, getUserQualities } = useQualities();
  const useryQualitiesArray = getUserQualities(userQualities);
  if (!isLoading) {
    return (
      <>
        {useryQualitiesArray.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </>
    );
  } else return "Loading ...";
};

QualitiesList.propTypes = {
  userQualities: PropTypes.array.isRequired,
=======
import { useQualities } from "../../../hooks/useQuality";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQualities } = useQualities();
    const userQualities = getQualities(qualities);
    if (!isLoading) {
        return (
            <>
                {userQualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </>
        );
    } else {
        return "Loading...";
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default QualitiesList;
