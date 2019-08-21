import React from 'react'
import Layout from '../../components/Layouts/Layout'
import styled from 'styled-components'
import Card from './component/Card'
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
const Illustrator = styled.div`
  background-image: url("https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_voice_interface_eckp-600x501.png");
  width: 600px;
  height: 501px;
`

const Slogan = styled.h1`
 font-size: 40px;
 line-height: 60px;
  
`
const Banner = styled.div`
  display: flex;
`

const SloganWrapper = styled.div`
  width: calc(100% - 600px);
  margin-top: 70px;
`

const SloganCaption = styled.div`
  font-size: 19px;
  max-width: 475px;
  line-height: 28px;
`

const CardWrapper = styled.div`
  padding-top: 20px;
  margin-bottom: -105px;
`

const HomeContainer  = props => {



  return (
    <Layout title={'Services'}>
    <Content>
      <Container>
      <Banner>
      <SloganWrapper>
        <Slogan>
          Making Your Business
          Ideas
          Come True
      </Slogan>
        <SloganCaption>
          We provide businesses with all financial services including financial analysis of the enterprise.
        </SloganCaption>
      </SloganWrapper>
      <Illustrator />
      </Banner>

      <CardWrapper>
      <Row>
        <Col span={8}>
          <Card/>
        </Col>
        <Col span={8}>
          <Card/>
        </Col>
        <Col span={8}>
          <Card/>
        </Col>
      </Row>
      </CardWrapper>
      </Container>

      <Footer/>
    </Content>
    </Layout>
  )
}

export default HomeContainer
