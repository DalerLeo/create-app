import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  text-align: center;
  box-shadow: 0px 10px 35px 0px rgba(0,0,0,.1);
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
  margin: 0 15px;
  padding: 62px 30px 58px;
  background-color: #fff;

`

const Title = styled.h4`
    color: #000;

`

const Descr = styled.p`
color: #000;
    font-size: 16px;
`
const Card = props => {

  return (
    <Wrap>
      <Title>Branding</Title>
      <Descr>Regular Business Law Assistance service includes monitoring the legal sphere of your business.</Descr>
    </Wrap>
  )
}

export default Card
