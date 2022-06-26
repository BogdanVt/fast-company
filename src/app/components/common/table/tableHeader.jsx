import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
<<<<<<< HEAD
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const selectedArrow = (item) => {
    if (selectedSort.path === item) {
      if (selectedSort.order === "asc") {
        return <i className="bi bi-caret-up-fill"></i>;
      } else {
        return <i className="bi bi-caret-down-fill"></i>;
      }
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
            style={{ width: "100px" }}
          >
            {columns[column].name} {selectedArrow(columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
=======
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {columns[column].path === selectedSort.path && (
                            <i
                                className={
                                    "bi bi-caret-" +
                                    (selectedSort.order === "asc"
                                        ? "up"
                                        : "down") +
                                    "-fill m-1"
                                }
                            ></i>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
