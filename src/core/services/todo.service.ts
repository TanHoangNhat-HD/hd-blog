import { apiService } from './api.service'

class TodoService {
  getTodoList = () => apiService.get('todos')
}

export const todoService = new TodoService()
