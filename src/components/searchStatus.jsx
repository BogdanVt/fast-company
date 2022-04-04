import React from "react";

const SearchStatus = (props) => {

  return (
      <>
          <h2>
            <span className={"badge bg-"+(props.users.length>0?"primary":"danger")}>
                {props.users.length>0
                    ?`${props.users.length} ${props.onPhrase(props.users.length)} с тобой сегодня`
                    :"Никто с тобой не тусанет"}
            </span>
          </h2>
      </>
  )
}

export default SearchStatus