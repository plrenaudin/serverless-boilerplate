import PropTypes from "prop-types";
import React from "react";
import fetcher from "../../modules/fetcher";
import "./index.less";

const deleteUser = id => () => {
  fetcher(`/api/users/${id}`, {
    method: "DELETE"
  }).then(() => {
    //Hack, should be handled by a global state management or something...
    window.location.reload();
  });
};

const UserList = ({ users }) => (
  <>
    {users.length > 0 && (
      <ul>
        {users.map(i => (
          <li key={i._id}>
            {i.name} {i.age}
            <button onClick={deleteUser(i._id)}>Delete</button>
          </li>
        ))}
      </ul>
    )}
  </>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default React.memo(UserList);
