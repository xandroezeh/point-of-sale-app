import React from 'react'
import { Row, Col } from 'antd';
import AppLayout from '../../components/Layout'
import GetProducts from '../../features/products/GetProducts';
function Home() {
  return (
    <AppLayout> 
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <GetProducts/>
        </Col>
      </Row>
    </AppLayout>
  )
}

export default Home