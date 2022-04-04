import React, {useState} from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => setUsers(users.filter((user)=>user._id !==userId));

    const getIcon = (id) => {
        const idIndex = users.findIndex((i)=>i._id === id);
        const newUsers = [...users]
        newUsers[idIndex].bookmark = newUsers[idIndex].bookmark?false:true

        setUsers(newUsers)
    }

    return (
        <>
            <Users onIcon={getIcon} onDelete={handleDelete} users={users} />
        </>
    )

}

export default App