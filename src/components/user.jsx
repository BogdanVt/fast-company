import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {

    return (
        <>
            {props.users.map((user)=>(
                <tr key={user._id}>
                    <td>{user.name}</td>
                   <Qualitie user={user} />
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <BookMark user={user} onIcon={props.onIcon}/>
                    <td><button className={"btn btn-danger"} onClick={()=>props.onDelete(user._id)}>delete</button></td>
                </tr>
            ))}
        </>
)
}

export default User