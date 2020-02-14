import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

// state = {
//   users: [
//     {
//       id: '4',
//       login: 'doctoron',
//       avatar_url: 'https://avatars0.githubusercontent.com/u/42006946?s=460&v=4',
//       html_url: 'https://github.com/doctoron'
//     }
//   ]
// }
export default Users
