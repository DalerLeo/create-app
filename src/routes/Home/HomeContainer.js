import React from 'react'
import Layout from '../../components/Layouts/Layout'
import styled from 'styled-components'

const Content = styled.div`

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
const HomeContainer  = props => {



  return (
    <Layout>
    <Content>
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
    </Content>
    </Layout>
  )
}

export default HomeContainer
