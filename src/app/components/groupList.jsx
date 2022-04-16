import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item._id}
                    className={"list-group-item" +
                        (item.name === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item.name)}
                    role="button"
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default GroupList;
