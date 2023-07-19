import React, { useEffect, useState } from "react";

import { getUser } from "./../../actions/users";

const UserList = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUser().then((res) => {
      setUsers(res);
    });
  }, [getUser,users]);


  const handleClick = (user,action)=>{

  }

  return (
    <div>
      <h2 className="my-2">Users</h2>
      <table className="table w-100">
        <thead>
          <tr>
            <th>User</th>

            <th className="hide-sm">Email</th>

            <th className="hide-sm">Status</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>

              <td className="hide-sm">{user.email}</td>

              <td className="hide-sm">{(user.blocked)?"Blocked":"Active"}</td>

              <td>
                <button className={(user.blocked)?"action-btn unblock-btn":"action-btn block-btn"} onClick={handleClick(user._id,user.blocked)}>{(user.blocked)?"Unblock":"Block"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
