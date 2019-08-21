import React from 'react'
import Layout from '../../components/Layouts/Layout'
import styled from 'styled-components'
import Card from './component/Card'
import {Row, Col} from '../../components/Grid'
import Container from '../../components/Styled/Container'
import Input from '../../components/Styled/Input'
import Textarea from '../../components/Styled/TextArea'
import Label from '../../components/Styled/Label'
import Button from '../../components/Styled/Button'
import Footer from '../../components/Footer'

const imgSrc = 'https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_finance_0bdk.png'
const contactImg = 'https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_resume_folder_2_arse.png'
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

const BlackBack = styled.div`
  background-color: black;
  padding: 189px 0 79px;
  color: #fff
`

const ResultTitle = styled.h1`
  color: #fff;
  font-size: 38px;
  font-weight: 500;
  font-style: normal;
  line-height: 46px;

`
const ResultInfo = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  line-height: 26px;
  letter-spacing: .1px;
`

const CallBack = styled(Container)`
  padding: 30px 0 80px;
`
const CallBackTitle = styled.h2`
    text-align: center;
    font-size: 38px;
    font-style: normal;
    line-height: 46px;
    padding: 0;
    margin-bottom: 0;
`

const CallBackInfo = styled.div`
  text-align: center;
  & p {
  max-width: 50%;
  display: inline-block;
  }
`

const liveChat = 'Get Dedicated live chat agents(operators) 24/7 to conduct live chat support for your website. Increase sales and lead for your business and build real costumer relationships'
const bpo = 'We provide Business process outsourcing services for clients who know and understand their needs. Leverage our cost efficient agents to handle anyp part of your business'
const call = 'Phone and voice agents for outbound and inbound call center, live answering service, order verification, telemarketing, customer support and virtual assistant'
const HomeContainer  = props => {

  return (
    <Layout>
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
          Getting started is simple. We need a little information about your business, product, and or service. Then we put together a plan on how many agents, what services you need, and availability.
        </SloganCaption>
      </SloganWrapper>
      <Illustrator />
      </Banner>

      <CardWrapper>
      <Row>
        <Col span={8}>
          <Card content={liveChat} title={'Live Chat Support'}/>
        </Col>
        <Col span={8}>
          <Card content={bpo} title={'Full BPO Service'}/>
        </Col>
        <Col span={8}>
          <Card content={call} title={'Call Center Solutions'}/>
        </Col>
      </Row>
      </CardWrapper>
      </Container>
      <BlackBack>
      <Container>
        <Row gutter={30}>
          <Col span={11}>
            <ResultTitle>Our Results</ResultTitle>
            <ResultInfo>
              We work and play nicely with all the major live chat software, helpdesk and ticket support software, and email software. Our agents who become your employees work on your business with dedication. We offer agents for live chat, ticket & email support, phone and voice support, telemarketing, customer support, virtual assistants, and much more. Get real people who work for your business and boost your revenue and increase customer satisfaction.
            </ResultInfo>
          </Col>
          <Col span={13}>
            <img src={imgSrc} alt=""/>
          </Col>
        </Row>
      </Container>
      </BlackBack>
      <CallBack>
        <CallBackTitle>Get In Touch</CallBackTitle>
        <CallBackInfo>
          <p>
            You can contact us here to begin having the experts at “SWNTG” LLC do customer support for your business. View our case studies to see what we have done for other companies.
          </p>
        </CallBackInfo>
        <Row>
          <Col span={10}>
            <img src={contactImg} alt=""/>
          </Col>
          <Col span={14}>
            <Label>Your Name (required)</Label>
            <Input/>
            <Label>Your Email (required)</Label>
            <Input/>
            <Label>Subject</Label>
            <Input/>
            <Label>Your Message</Label>
            <Textarea rows="6"/>
            <Button type="submit" value="Send"/>
          </Col>
        </Row>
      </CallBack>
      <Footer/>
    </Content>
    </Layout>
  )
}

export default HomeContainer
