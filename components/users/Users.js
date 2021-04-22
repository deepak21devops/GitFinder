import React  from 'react'
import Useritems from './Useritems'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


 const Users = ({loading,users})=> {
     
       if(loading){
          return  <Spinner />
       }
       else{
        return (
            <div style={usersStyle}>
               {users.map(user=>(
            <Useritems key = {user.id} user={user} />
        ))}
            </div>
        )
       }
        
}

const usersStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
}

Users.propTypes = {
    loading:PropTypes.bool.isRequired,
    users:PropTypes.array.isRequired
}

export default Users
