import React from "react";

const Qualitie = (props) => {
  return (
      <>
          <td>{props.user.qualities.map(item=><span className={"badge m-1 bg-"+item.color} key={item._id}>{item.name}</span>)}</td>
      </>
  )
}
export default Qualitie