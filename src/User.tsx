import React from 'react'

type UserShape = {
    children: React.ReactNode
}

const User = ({children}: UserShape) => {
  return (
    <div>
        <h1>{children}</h1>
    </div>
  )
}

export default User