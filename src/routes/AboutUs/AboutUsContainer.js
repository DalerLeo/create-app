import React from 'react'
import Layout from '../../components/Layouts/Layout'
import styled from 'styled-components'
import {Row, Col} from '../../components/Grid'
import Container from '../../components/Styled/Container'
import Footer from '../../components/Footer'

const Content = styled.div`

img {
height: auto;
    max-width: 100%;
    border: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    display: inline-block;
}
`
const Benefit = styled.h5`
color: #000;
  font-size: 19px;
  margin-bottom: 18px;
    font-style: normal;
    line-height: 26px;
    padding: 0;
    margin-top: 0;
`
const CardWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: #282828;
  color: #fff;
  text-align: center;
    font-size: 19px;
    font-weight: 300;
    font-style: normal;
    line-height: 29px;
    letter-spacing: .1px;
`
const Who = styled.h2`
    font-size: 38px;
    color: #fff;
    font-style: normal;
    line-height: 46px;
`
const img = 'https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_site_stats_l57q.png'

const HomeContainer  = props => {

  return (
    <Layout title={'About Us'}>
    <Content>
      <Container>
        <Row align={'center'}>
          <Col span={12}><img src={img} alt=""/></Col>
          <Col span={12} align>
            <Benefit>One of the top outsourcing firms in the industry</Benefit>
            <Benefit>English-speaking agents with a wide range of skills and expertise</Benefit>
            <Benefit>Hire our agents as employees for your business 24/7</Benefit>
            <Benefit>Over 100+ clients choose us to do support for their company.</Benefit>
            <Benefit>Increased conversion rates 20-55% per company</Benefit>
            <Benefit>Cut costs and wages by using our agents as employees</Benefit>
          </Col>
        </Row>

      </Container>

      <CardWrapper>
        <Container>
          <Who>Who we are?</Who>
          The main activities of the company is: development and support of software of different levels and complexity, a full range of services for the development and creation of sites with a control system, the development of mobile applications of any complexity, the service of outsourcing call center and customer support, the creation of bots for messengers. «SWNTG» LLC help businesses hire employees remotely. We specialize in managing customer support, increasing sales, and processing orders.
          <br/>
          <br/>
          All customers of “SWNTG” LLC be pleased to cooperate with our company and warmly about us. After all, we take into account all the requirements and wishes of our customers.
        </Container>
      </CardWrapper>
      <Footer/>
    </Content>
    </Layout>
  )
}

export default HomeContainer
