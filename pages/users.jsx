import React from 'react'
import User from '../components/user'

const users = ({users}) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <User beasky={user}/>
        </div>
      ))}
    </div>
  )
}

export default users

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data
    }
  }
}