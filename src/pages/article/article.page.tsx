import { Content } from 'antd/lib/layout/layout'
import * as React from 'react'
import { useParams } from 'react-router'
import style from './article.module.scss'
import { useAppDispatch, useAppSelector } from '../../core/hooks/hooks'
import { setArticle } from '../../store/slice/article.slice'

export default function ArticlePage() {
  const dispatch = useAppDispatch()
  const article = useAppSelector((state) => state.article.article)
  const { articleId } = useParams() as { articleId: string }
  React.useEffect(() => {
    dispatch(setArticle(parseInt(articleId)))
  }, [])

  return (
    <Content className={style.article__container}>
      <img style={{ maxWidth: '50%' }} src={article?.thumbnailURL} alt='' />
      <h1>{article?.title}</h1>
    </Content>
  )
}
