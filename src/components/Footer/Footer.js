import React from 'react'
import styled from 'styled-components'
import Container from '../Styled/Container'
import Logo from '../Styled/Logo'
import Menu from '../Nav/Menu'

const BlackBack = styled.div`
  background-color: black;
  padding: 72px 0px 63px;
`

const Wrapper = styled(Container)`
display: flex;
justify-content: space-between;
`
const Footer = props => {

  return (
    <BlackBack>
      <Wrapper>
        <Logo white={true}>Logo</Logo>
        <Menu white={true}/>
        <div/>
      </Wrapper>
    </BlackBack>
  )
}

export default Footer
