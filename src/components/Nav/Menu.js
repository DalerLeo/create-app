import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MenuWrap = styled.div`
  
`
const routes = [
  {name: 'Home', path: '/'},
  {name: 'About Us', path: '/about-us'},
  {name: 'Services', path: '/services'},
  {name: 'Partners', path: '/partners'}
]
const MenuItems = styled(Link)`
color: ${props => props.white ? '#fff' : '#000'};
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

const Menu = props => {

  const {white} = props

  return (
    <MenuWrap>
      {routes.map(route => (<MenuItems white={white} key={route.path} to={route.path}>{route.name}</MenuItems>))}
    </MenuWrap>
  )
}

export default Menu
