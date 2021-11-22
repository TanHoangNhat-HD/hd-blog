import { Content } from 'antd/lib/layout/layout'
import * as React from 'react'
import BlogItem from '../../components/blogItem/blogItem.component'
import axios from 'axios'
import { Blog } from '../../core/models/blog'
import style from './blog.module.scss'

export default function BlogPage() {
  const [blogList, setBlogList] = React.useState<Array<Blog>>()

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'https://my-json-server.typicode.com/TanHoangNhat-HD/hd-blog-server/blogs',
      )
      setBlogList(response.data)
    }
    fetchData()
  }, [])

  return (
    <Content className={style.blog__container}>
      {blogList?.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </Content>
  )
}
