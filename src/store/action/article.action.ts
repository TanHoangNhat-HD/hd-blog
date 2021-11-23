import { createAsyncThunk } from '@reduxjs/toolkit'
import { articleService } from '../../core/services/article.service'

export const getArticleList = createAsyncThunk('article/getArticleList', async () => {
  const response = await articleService.getArticleList()
  return response.data
})
