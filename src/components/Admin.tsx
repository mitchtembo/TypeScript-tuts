import React from 'react'
import { AdminInfo } from '../types'

const Admin = ({...props}: AdminInfo) => {
  return (
    <div>
        <hr/>
        <h2>Admin Info Dashboard</h2>
        <hr />
        {props.role === 'admin' ? <h1>You are an admin</h1> : <h1>You are not an admin</h1>}
        

    </div>
  )
}

export default Admin