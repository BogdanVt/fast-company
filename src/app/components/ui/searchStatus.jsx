import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
<<<<<<< HEAD
  const renderPhrase = (number) => {
    const message =
      number >= 2 && number <= 4 ? "человека тусанут" : "человек тусанет";

    return `${number} ${message} с тобой сегодня`;
  };

  return (
    <>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0 ? renderPhrase(length) : "Никто с тобой не тусанет"}
      </span>
    </>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
=======
    const renderPhrase = (length) => {
        const lastOne = Number(length.toString().slice(-1));
        if (length > 4 && length < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default SearchStatus;
