import * as React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu'
import { useAppDispatch, useAppSelector } from '../../core/hooks/hooks'
import { setUserDetail } from '../../store/slice/user.slice'

export default function Header() {
  const username = useAppSelector((state) => state.user.username)
  const dispatch = useAppDispatch()
  function handleSignOut() {
    localStorage.removeItem('username')
    dispatch(setUserDetail(null))
  }
  return (
    <Layout.Header style={{ padding: '0 150px' }}>
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
          {username ? (
            <SubMenu title={`Hi ${username}!`}>
              <Menu.Item onClick={handleSignOut}>Sign out</Menu.Item>
            </SubMenu>
          ) : (
            <NavLink to='/sign-in'>Login</NavLink>
          )}
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
}
