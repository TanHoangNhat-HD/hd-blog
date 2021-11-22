import * as React from 'react'
import { useParams } from 'react-router'

export default function Article() {
  const { articleId } = useParams()
  return (
    <div>
      <h1>Article with id: {articleId}</h1>
    </div>
  )
}
