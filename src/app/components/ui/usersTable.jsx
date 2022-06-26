import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark";
import Table from "../common/table";
<<<<<<< HEAD
import QualitiesList from "./qualities/qualitiesList";
import Proffesion from "./profession";
=======
import { Link } from "react-router-dom";
import Profession from "./profession";
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
<<<<<<< HEAD
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList userQualities={user.qualities} />,
    },
    professions: {
      name: "Профессия",
      component: (user) => <Proffesion id={user.profession} />,
    },
    completedMeetings: {
      path: "completedMeetings",
      name: "Встретился, раз",
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
=======
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: {
            name: "Профессия",
            component: (user) => <Profession id={user.profession} />
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: {
            path: "rate",
            name: "Оценка"
        },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => {
                        onToggleBookMark(user._id);
                    }}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      ),
    },
  };

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserTable;
