import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import api from "../../../api";
import PropTypes from "prop-types";
import GroupList from "../../common/groupList";
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../ui/usersTable";
import Loader from "../../common/loader";
import _ from "lodash";
<<<<<<< HEAD
import SearchForm from "../../common/form/searchForm";
import { useUser } from "../../../hooks/useUsers";

const UsersListPage = () => {
  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const pageSize = 8;
  const [valueForFiltrationBySearch, setValueForFiltrationBySearch] =
    useState();
  const { users } = useUser();

  const getValueFromSearch = (params) => {
    setValueForFiltrationBySearch(params);
    setSelectedProf();
  };

  const handleDelete = (userId) => {
    // setUsers((prevState) => prevState.filter((user) => user._id !== userId));
    console.log(userId);
  };

  const handleToggleBookMark = (id) => {
    const toggleBookMarkArray = users.map((user) => {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
      }
      return user;
    });
    // setUsers(toggleBookMarkArray);
    console.log(toggleBookMarkArray);
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    if (valueForFiltrationBySearch !== "") setValueForFiltrationBySearch();
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filteredUsersBySearch = valueForFiltrationBySearch
      ? users.filter((user) =>
          user.name
            .toLowerCase()
            .includes(valueForFiltrationBySearch.toLowerCase().trim())
        )
      : users;

    const filteredUsers = selectedProf
      ? filteredUsersBySearch.filter(
          (user) => user.profession._id === selectedProf._id
        )
      : filteredUsersBySearch;

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]); // desc
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
      setSelectedProf();
    };

    return (
      <div className="container-fluid">
        <div className="row">
          {professions && users.length > 0 && (
            <div className="col-2">
              <GroupList
                selectedItem={selectedProf}
                items={professions}
                onItemSelect={handleProfessionSelect}
              />
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                Очистить
              </button>
            </div>
          )}
          <div className="col">
            <SearchStatus length={count} />
            <SearchForm onGetValue={getValueFromSearch} />
            {count > 0 && (
              <div style={{ minHeight: "720px" }}>
                <UserTable
                  users={userCrop}
                  onSort={handleSort}
                  selectedSort={sortBy}
                  onDelete={handleDelete}
                  onToggleBookMark={handleToggleBookMark}
                  style={{ minHeight: "720px" }}
                />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
=======
import { useUser } from "../../../hooks/useUsers";

const UsersListPage = () => {
    const pageSize = 8;
    const [searchQuerry, setSearchQuerry] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const { users } = useUser();
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuerry]);
    const handleToggleBookMark = (id) => {
        const userIndex = users.findIndex((user) => user._id === id);
        const newUsers = [...users];
        newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark;
        console.log(newUsers);
        // setUsers(newUsers);
    };
    const clearFilter = () => setSelectedProf();
    const handleSearchQuerry = ({ target }) => {
        clearFilter();
        setSearchQuerry(target.value);
    };
    const handleDelete = (userId) => {
        console.log(userId);
        // setUsers(users.filter((user) => user._id !== userId));
    };
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        if (searchQuerry !== "") setSearchQuerry("");
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSearchQuerry("");
        setSortBy(item);
    };
    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
            : searchQuerry
                ? users.filter((user) =>
                    user.name
                        .toLowerCase()
                        .includes(searchQuerry.trim().toLowerCase())
                )
                : users;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }

        return (
            <div className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    {professions && (
                        <>
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Очистить
                            </button>
                        </>
                    )}
                </div>
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <input
                        type="text"
                        id="text"
                        name="searchQuerry"
                        placeholder="Search..."
                        value={searchQuerry}
                        onChange={handleSearchQuerry}
                    />
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <Loader />;
};

UsersListPage.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object.isRequired),
    appi: PropTypes.arrayOf(PropTypes.object.isRequired)
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
};

export default UsersListPage;
