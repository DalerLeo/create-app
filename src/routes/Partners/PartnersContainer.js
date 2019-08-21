import React from 'react'
import Layout from '../../components/Layouts/Layout'
import styled from 'styled-components'

import {Row, Col} from '../../components/Grid'
import Container from '../../components/Styled/Container'
import Footer from '../../components/Footer'
import cityMed from '../../images/cityMed.png'
import innovation from '../../images/innovation.png'
import muic from '../../images/muic.png'
import Universalbank from '../../images/Universalbank.png'
import  uzExpo from '../../images/uzExpo.png'
import uztabacco from '../../images/uztabacco.png'
import bufallo from '../../images/bufallo.png'
import asiaforum from '../../images/asiaforum.png'
import groundZero from '../../images/groundZero.png'

const Content = styled.div`

margin: 70px 0 100px;
`

const Card = styled.div`
font-weight: bold;
display: flex;
    flex-direction: column;
    justify-content: space-between;
  text-align: center;
  min-height: 330px;
  background-color: #000;
  color: #fff;
  box-shadow: 0px 0px 15px 0px #000;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
  margin: 30px 20px;
  padding: 82px 30px 63px;
`


const data1 = [
  {name: 'MUIC', src: muic},
  { name: 'UniversalBank', src: Universalbank},
  { name: 'UzExpo Center', src: uzExpo},
  ]

const data2 = [
  { name: 'UzTabacco', src: uztabacco},
  { name: 'City MED', src: cityMed},
  { name: 'Министерство Инновационного развития', src: innovation}
  ]
const data3 = [
  { name: 'Buffalo constructions', src: bufallo},
  { name: 'Asia Forum', src: asiaforum},
  { name: 'Коворкинг центр “Ground zero”', src: groundZero}
  ]
const HomeContainer  = props => {



  return (
    <Layout title={'Partners'}>
    <Content>
      <Container>
      <Row>
        {data1.map(item => {

          return (
            <Col span={8}>
            <Card key={item.name}>
              <img src={item.src} alt={item.name}/>
              <div>{item.name}</div>

            </Card>
            </Col>
          )
        })}
      </Row>
      <Row>
        {data2.map(item => {

          return (
            <Col span={8}>
            <Card key={item.name}>
              <img src={item.src} alt={item.name}/>
              <div>{item.name}</div>

            </Card>
            </Col>
          )
        })}
      </Row>
      <Row>
        {data3.map(item => {
          return (
            <Col span={8}>
            <Card key={item.name}>
              <img src={item.src} alt={item.name}/>
              <div>{item.name}</div>
            </Card>
            </Col>
          )
        })}
      </Row>
      </Container>

    </Content>
      <Footer/>
    </Layout>
  )
}

export default HomeContainer
