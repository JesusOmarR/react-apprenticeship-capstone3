import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar.styled'

import { useAuth } from '../../Providers/User/User.provider'
function Navbar() {
  const { authenticated, logout } = useAuth()

  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <Bars />
        <NavMenu>
          <input />
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/archives" activeStyle>
            Archived
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {authenticated ? (
            <NavBtnLink to="/login" onClick={logout}>
              Log out
            </NavBtnLink>
          ) : (
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
