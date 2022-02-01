import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SideNav,
} from './Navbar.styled'

import { useAuth } from '../../Providers/User/User.provider'
import { useNotes } from '../../Providers/Notes'

function Navbar() {
  const { authenticated, logout } = useAuth()
  const { setSearchParams, searchParam } = useNotes()
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const changeWidth = () => {
      if (innerWidth >= 768) {
        setToggleMenu(false)
      }
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const onLogout = () => {
    logout()
    setToggleMenu(false)
  }
  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <Bars onClick={toggleNav} />
        <NavMenu>
          <div className="hidenItems">
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/archives" activeStyle>
              Archived
            </NavLink>
          </div>
          <input
            onChange={(e) => setSearchParams(e.target.value)}
            value={searchParam}
          />
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

      <SideNav open={toggleMenu} id="mySidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={toggleNav}>
          &times;
        </a>
        <a onClick={toggleNav} href="/archives">
          Archives
        </a>
        <a onClick={toggleNav} href="/">
          home
        </a>

        {authenticated ? (
          <NavBtnLink to="/login" onClick={onLogout}>
            Log out
          </NavBtnLink>
        ) : (
          <NavBtnLink onClick={() => setToggleMenu(false)} to="/login">
            Sign In
          </NavBtnLink>
        )}
      </SideNav>
    </>
  )
}

export default Navbar
