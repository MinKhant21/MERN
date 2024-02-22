import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
export default function NavBar() {
  let {user} = useContext(AuthContext)
  return (
    <div>NavBar
      {
        !user && <Link to={'/login'} className=' bg-neutral-800'>Login</Link>
      }
      <Link to={'/register'}>Register</Link>
      <Link to={'/logout'}>Logout</Link>
    </div>
  )
}
