import React from 'react';
import {Info} from '../types'

const UserInfo = ({name, id, email}: Info) => {
  return (
    <div>
        <div>User Information</div>
        <h1>NAME: {name}</h1>
        <h2>EMAIL: {email}</h2>
        <h4>StudentPIN: {id}</h4>
    </div>
  )
}

export default UserInfo