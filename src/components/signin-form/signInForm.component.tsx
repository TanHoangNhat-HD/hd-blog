import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../core/hooks/hooks'
import { setUserDetail } from '../../store/slice/user.slice'

interface UserLogin {
  username: string
  password: string
  remember: boolean
}

export default function SignInForm() {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const onFinish = (values: UserLogin) => {
    //   Only for demo
    localStorage.setItem('username', values.username)

    dispatch(setUserDetail(values.username))

    navigate(-1)
  }

  return (
    <Form
      name='normal_login'
      style={{ maxWidth: '300px', margin: '50px auto' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a onClick={(event) => event.preventDefault()} style={{ float: 'right' }} href=''>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          Log in
        </Button>
        Or{' '}
        <a onClick={(event) => event.preventDefault()} href=''>
          register now!
        </a>
      </Form.Item>
    </Form>
  )
}
