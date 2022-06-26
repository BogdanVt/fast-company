import React from "react";
<<<<<<< HEAD
import { useProfessions } from "../../hooks/useProfessions";
import PropTypes from "prop-types";

const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfessions();
  const prof = getProfession(id);
  if (!isLoading) {
    return <p>{prof.name}</p>;
  } else return "Loading ...";
};

Profession.propTypes = {
  id: PropTypes.string,
=======
import PropTypes from "prop-types";
import { useProfessions } from "../../hooks/useProfession";

const Profession = ({ id }) => {
    const { isLoading, getProfession } = useProfessions();
    const prof = getProfession(id);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else {
        return "Loading...";
    }
};

Profession.propTypes = {
    id: PropTypes.string
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default Profession;
