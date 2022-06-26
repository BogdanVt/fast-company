import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
const Quality = ({ color, name }) => {
  const getQualityClasses = (color) => {
    const classes = `badge bg-${color} m-2`;
    return classes;
  };

  return (
    <>
      <span className={getQualityClasses(color)}>{name}</span>
    </>
  );
=======
const Quality = ({ color, name, _id }) => {
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

Quality.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quality;
