import { apiService } from './api.service'

class ArticleService {
  getArticleList = () => apiService.get('articles')

  getArticleDetails = (articleId: string) => apiService.get(`articles/${articleId}`)
}

export const articleService = new ArticleService()
