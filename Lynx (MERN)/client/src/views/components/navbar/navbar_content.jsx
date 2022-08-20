import React, { useContext } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {auth_context} from '../../../context/auth_context'

export const NavbarContent = ({active, set_active}) => {
  const navigate = useNavigate()
  const auth = useContext(auth_context)

  const logout_handler = event => {
    event.preventDefault()
    set_active(false)
    auth.logout()
    navigate('/')
  }

  return(
  <div className={active ? "navbar_content" : "navbar_content inactive"} /*className="navbar"*/>
    <a id="close_nav_btn"  onClick={() => set_active(false)}>&#10006;</a>
    <NavLink to="/player">Player</NavLink>
    <NavLink to="/library">Library</NavLink>
    <NavLink to="/playlists">Playlists</NavLink>
    <a to="/" onClick={logout_handler}>LogOut</a>
  </div>
)

}
