import { apiClient } from './api'

export interface WritingFeedback {
  id: string
  text: string
  tone: 'formal' | 'casual' | 'neutral'
  clarity: number // 0-100
  suggestions: string[]
  improvedVersion?: string
}

export interface AITutorMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export const aiService = {
  async getWritingFeedback(text: string): Promise<WritingFeedback> {
    return apiClient.post('/ai/writing-feedback', { text })
  },

  async sendTutorMessage(message: string, conversationId?: string): Promise<AITutorMessage> {
    return apiClient.post('/ai/tutor-chat', { message, conversationId })
  },

  async generateCertificate(moduleId: string, userName: string): Promise<{
    id: string
    url: string
    certificateId: string
    qrCode: string
  }> {
    return apiClient.post('/ai/certificate', { moduleId, userName })
  },

  async adaptiveContentRecommendation(userRole: string, completedModules: string[]): Promise<string[]> {
    return apiClient.post('/ai/recommend-content', { userRole, completedModules })
  },
}
