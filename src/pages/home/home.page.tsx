import { Layout, Menu, Breadcrumb } from 'antd'
import * as React from 'react'

const { Content } = Layout

export default function Home() {
  return (
    <div>
      <Content style={{ padding: '50px 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className='site-layout-content'>
          We are a software development firm located in Ho Chi Minh City, Vietnam. With 180+
          employees, we have the resources and abilities to handle any web, mobile, or software
          project. We have been trusted by clients around the world, ranging from early-stage
          startups to large companies. Whether you’re looking for someone to manage all the
          technical aspects of your business or an offshore development team to support your
          existing developers, we are the team for you.
        </div>
      </Content>
    </div>
  )
}
