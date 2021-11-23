import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../core/models/article'
import { getArticleList } from '../action/article.action'

export interface ArticleState {
  articleList: Array<Article> | []
  article: Article | null
}

const initialState: ArticleState = {
  articleList: [],
  article: null,
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<number>) => {
      state.article = state.articleList.find((article) => article.id === action.payload) || null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticleList.fulfilled, (state, action) => {
      state.articleList = action.payload
    })
  },
})

export const { setArticle } = articleSlice.actions

export default articleSlice.reducer
