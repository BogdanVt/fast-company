import React, {useState} from "react";
import api from "../api"
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())


    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = () => {
        let manyUsers = users.length
        const correctWord = (number) => {
            return (number < 10 && number % 10 > 1 && number % 10 < 5  ) ? 'человека' :  'человек';
        }
        if (manyUsers > 0){
            return <h2>{manyUsers} {correctWord(manyUsers)} с тобой тусанут сегодня</h2>
        }else {
            let table = document.querySelector("table")
            table.classList.add('hide')
               return <h2 className="badge bg-danger">Никто с тобой не тусанет</h2>
        }
    }


   return (
       <>
           {renderPhrase()}
           <table className="table">
               <thead>
               <tr>
                   <th key={2} className="col">Имя</th>
                   <th key={3} className="col">Качества</th>
                   <th key={4} className="col">Профессия</th>
                   <th key={5} className="col">Встретился,раз</th>
                   <th key={6} className="col">Оценка</th>
                   <th key={7} className="col"> </th>
               </tr>
               </thead>
               <tbody>
                { users.map((user) => {
                   return  <tr key={user._id}>
                       <th>{user.name}</th>
                       <th>
                           {user.qualities.map((x)=>{
                                   let classes = `badge m-1 bg-${x.color}`
                                   return (
                                       <span key={x._id} className={classes}>
                                        {x.name}
                                       </span>)
                           })}
                       </th>
                       <th>{user.profession.name}</th>
                       <th>{user.completedMeetings}</th>
                       <th>{user.rate}/5</th>
                       <th>
                           <button className="btn btn-danger"
                                   onClick={()=>handleDelete(user._id)}
                           >delete
                           </button>
                       </th>
                   </tr>
               })}
               </tbody>
           </table>
       </>
   )
}

export default Users