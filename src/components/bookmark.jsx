import React from "react";

const BookMark = (props) => {



        return (
            <>
                <td>
            <span className={(props.user.bookmark)?"bi bi-bookmark-fill":"bi bi-bookmark"}
                  onClick={()=>props.onIcon(props.user._id)} >

            </span>
            </td>
            </>
        )

    }
export default BookMark



/*
<i className="bi bi-bookmark-fill"></i>*/
{/* className => (className === 'bi bi-bookmark') ? 'bi bi-bookmark-fill' : 'bi bi-bookmark' */}