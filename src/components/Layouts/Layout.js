import React from 'react'
import Nav from '../Nav'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px
`
const Layout = ({children}) => {
  return (
    <Container>
    <Nav/>
      {children}
  </Container>
  )
}

export default Layout
