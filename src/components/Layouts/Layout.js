import React from 'react'
import Nav from '../Nav'
import Container from '../Styled/Container'
import styled from 'styled-components'

const Title = styled.div`
  padding: 50px 0;
  font-size: 38px;
  font-weight: 500;
  line-height: 46px;
  color: #fff;
  background-color: #000;
  text-align: center;
`
const Layout = ({children, title}) => {
  return (
    <>
      <Container>
        <Nav/>
      </Container>
      {title && <Title>{title}</Title>}
      {children}
  </>
  )
}

export default Layout
