import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import style from './todosForm.module.scss'

export default function TodosForm() {
  function handleFormSubmit(values: any) {
    console.log(values)
  }
  return (
    <div className={style.form__container}>
      <Form
        name='normal_login'
        onFinish={handleFormSubmit}
        initialValues={{ remember: true }}
        className={style.todos__form}
      >
        <Form.Item name='username'>
          <Input className={style.todos__form__input} placeholder='Enter your tasks!!!' />
        </Form.Item>
      </Form>
    </div>
  )
}
