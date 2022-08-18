import './navbar.css'
import './navbar_content'
import React from 'react'

export const NavbarBtn = ({set_active}) => {
  return (
    <button id="nav_btn"  onClick={() => set_active(true)}>☰</button>
  )
}