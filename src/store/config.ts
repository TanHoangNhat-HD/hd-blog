import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './slice/user.slice'
import ArticleReducer from './slice/article.slice'

const rootReducer = combineReducers({
  user: UserReducer,
  article: ArticleReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
