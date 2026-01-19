import { apiClient } from './api'

export interface Module {
  id: string
  title: string
  description: string
  duration: number
  level: 'beginner' | 'intermediate' | 'advanced'
  category: 'development' | 'communication' | 'leadership' | 'strategy'
  thumbnail?: string
  lessons: Lesson[]
  progress: number
  completedAt?: string
}

export interface Lesson {
  id: string
  title: string
  content: string
  videoUrl?: string
  duration: number
  completed: boolean
}

export interface ModuleProgress {
  moduleId: string
  userId: string
  progress: number
  completedAt?: string
  lastAccessedAt: string
}

export const moduleService = {
  async getModules(role?: string): Promise<Module[]> {
    const params = role ? { role } : {}
    return apiClient.get('/modules', { params })
  },

  async getModule(id: string): Promise<Module> {
    return apiClient.get(`/modules/${id}`)
  },

  async getProgress(moduleId: string): Promise<ModuleProgress> {
    return apiClient.get(`/modules/${moduleId}/progress`)
  },

  async updateProgress(moduleId: string, progress: number): Promise<ModuleProgress> {
    return apiClient.put(`/modules/${moduleId}/progress`, { progress })
  },

  async completeLesson(moduleId: string, lessonId: string): Promise<void> {
    return apiClient.post(`/modules/${moduleId}/lessons/${lessonId}/complete`)
  },
}
