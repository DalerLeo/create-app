import React from 'react'
import styled from 'styled-components'
import Logo from '../Styled/Logo'
import Menu from './Menu'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0

`



const Nav = props => {

  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <Menu/>
    </Wrapper>
  )
}


export default Nav
