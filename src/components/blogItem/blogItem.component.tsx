import * as React from 'react'
import { Card } from 'antd'
import { Blog } from '../../core/models/blog'
import style from './blogItem.module.scss'
import { useNavigate } from 'react-router'

export default function BlogItem({ id, title, desc, thumbnailURL }: Blog) {
  const navigate = useNavigate()

  function handleItemClick() {
    navigate(`/blog/${id}`)
  }

  return (
    <Card
      onClick={handleItemClick}
      hoverable
      className={style.blog__item}
      cover={<img alt='example' src={thumbnailURL} />}
    >
      <Card.Meta title={title} description={desc} />
    </Card>
  )
}

// interface BlogTitleProps {
//   title: string
// }

// function BlogTitle({ title }: BlogTitleProps) {
//   return <div>{title}</div>
// }
