import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default function TodosForm() {
  function handleFormSubmit(values: any) {
    console.log(values)
  }
  return (
    <Form
      name='normal_login'
      style={{ maxWidth: '300px' }}
      onFinish={handleFormSubmit}
      initialValues={{ remember: true }}
    >
      <Form.Item name='username'>
        <Input placeholder='Enter your tasks!!!' />
      </Form.Item>
    </Form>
  )
}
