import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
const groupItem = Array.isArray(items)
    ? items.map(item => (
        <li key={item._id}
            className={"list-group-item" +
                (item.name === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(Object.assign(item))}
            role="button"
        >
            {item.name}
        </li>
    ))
    : Object.keys(items).map(item => (
        <li key={items[item][valueProperty]}
            className={"list-group-item" +
                (items[item] === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(items[item])}
            role="button"
        >
            {items[item][contentProperty]}
        </li>
    ));
    return (
        <ul className="list-group">
            {groupItem}
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
