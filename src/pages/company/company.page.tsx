import { Content } from 'antd/lib/layout/layout'
import * as React from 'react'
import TodosForm from '../../components/todos-form/todosForm.component'
import TodosList from '../../components/todos-list/todosList.component'
import style from './company.module.scss'

export default function Company() {
  return (
    <Content className={style.company__container}>
      <TodosForm />
      <TodosList />
    </Content>
  )
}
