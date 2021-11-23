import { Content } from 'antd/lib/layout/layout'
import * as React from 'react'
import BlogItem from '../../components/blogItem/blogItem.component'
import style from './blog.module.scss'
import { useAppDispatch, useAppSelector } from '../../core/hooks/hooks'
import { getArticleList } from '../../store/action/article.action'

export default function BlogPage() {
  const articleList = useAppSelector((state) => state.article.articleList)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getArticleList())
  }, [])

  return (
    <Content className={style.blog__container}>
      {articleList?.map((article) => (
        <BlogItem key={article.id} {...article} />
      ))}
    </Content>
  )
}
