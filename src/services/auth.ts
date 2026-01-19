import { apiClient } from './api'

export interface User {
  id: string
  email: string
  name: string
  role: 'scholar' | 'lecturer' | 'officer' | 'ngo_leader' | 'student'
  avatar?: string
  createdAt: string
}

export interface AuthResponse {
  token: string
  user: User
}

export const authService = {
  async signup(email: string, password: string, name: string, role: string): Promise<AuthResponse> {
    return apiClient.post('/auth/signup', { email, password, name, role })
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    return apiClient.post('/auth/login', { email, password })
  },

  async logout(): Promise<void> {
    typeof window !== 'undefined' && localStorage.removeItem('auth_token')
  },

  async getProfile(): Promise<User> {
    return apiClient.get('/auth/profile')
  },

  async updateProfile(updates: Partial<User>): Promise<User> {
    return apiClient.put('/auth/profile', updates)
  },
}
