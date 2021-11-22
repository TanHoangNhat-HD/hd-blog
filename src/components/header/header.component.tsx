import * as React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <Layout.Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item>
          <NavLink to='/home'>
            <img
              width='200'
              src='https://cdn.hdwebsoft.com/wp-content/uploads/2021/08/hdwebsoft-logo-white-new.svg'
            />
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to='/home'>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to='/blog'>Blog</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to='/technology'>Technology</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to='/company'>Company</NavLink>
        </Menu.Item>
        <Menu.Item style={{ marginLeft: 'auto' }}>
          <NavLink to='/sign-in'>Login</NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
}
