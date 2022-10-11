import React from 'react';

import Users from './User';
// import classes from './UserList.module.css';

const UserList = (props) => {
  return (
    <ul className={classes['Users-list']}>
      {props.User.map((User) => (
        <Users
          key={User.id}
          name={User.name}
          email={User.email}
          role={User.role}
        />
      ))}
    </ul>
  );
};

export default UserList;