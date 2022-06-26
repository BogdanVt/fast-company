import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
<<<<<<< HEAD
  const toggleI = () => {
    if (status === true) {
      return <i className="bi bi-bookmark-fill"></i>;
    }

    return <i className="bi bi-bookmark"></i>;
  };

  return (
    <>
      <button {...rest}>{toggleI()}</button>
    </>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
=======
    return (
        <button {...rest}>
            <i
                className={
                    "bi bi-bookmark-" +
                    (status === false ? "star" : "star-fill")
                }
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default BookMark;
