import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0

`

const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #000;

`

const Menu = styled.div`
  
`
const routes = [
  {name: 'Home', path: '/'},
  {name: 'About Us', path: '/about-us'},
  {name: 'Services', path: '/services'}
]
const MenuItems = styled(Link)`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6em;
  padding: 10px;
  display: inline-block;
  margin-left: 20px;
  transition: color 200ms;
  :hover {
    color: #939393;
  }

`
const Nav = props => {


  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <div>
        {routes.map(route => (<MenuItems key={route.path} to={route.path}>{route.name}</MenuItems>))}
      </div>
    </Wrapper>
  )
}


export default Nav
