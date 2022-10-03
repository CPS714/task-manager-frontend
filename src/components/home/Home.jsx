import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { user, logout } = useAuth0()

  return (
    <>
      <div>
        <h1>Welcome to the homepage...</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button
        onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default Home
