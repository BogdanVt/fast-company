import React from "react";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = (props) => {

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if(number>4 && number<15) return "человек тусанет";
        if([2,3,4].indexOf(lastOne)>=0) return "человека тусанут";

        return "человек тусанет"
    }


    return (
        <>
           <SearchStatus users={props.users} onPhrase={renderPhrase} />
            {props.users.length>0&&
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Професия</th>
                    <th scope="col">Встретился,раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th />

                </tr>
                </thead>
                <tbody>
                <User users={props.users} onDelete={props.onDelete} onIcon={props.onIcon}/>
                </tbody>
            </table>
            }
        </>
    )
}

export default Users