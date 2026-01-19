'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // API call would happen here
    setTimeout(() => {
      setLoading(false)
      // Redirect to dashboard
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-asdsc-navy to-asdsc-charcoal flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-plex-serif font-bold text-asdsc-navy mb-2 text-center">
            Join ASDSC
          </h1>
          <p className="text-center text-asdsc-charcoal mb-8">
            Start your professional learning journey today
          </p>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Professional Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
              >
                <option value="student">Graduate Student</option>
                <option value="scholar">Scholar & Researcher</option>
                <option value="lecturer">Lecturer & Educator</option>
                <option value="officer">Civil Servant & Officer</option>
                <option value="ngo_leader">NGO Leader</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="w-4 h-4 mt-1" required />
              <span className="ml-2 text-sm text-asdsc-charcoal">
                I agree to the{' '}
                <Link href="#" className="text-asdsc-gold hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-asdsc-gold hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button loading={loading} className="w-full" variant="secondary">
              Create Account
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-asdsc-gray text-center">
            <p className="text-asdsc-charcoal">
              Already have an account?{' '}
              <Link href="/login" className="text-asdsc-gold hover:text-asdsc-navy font-semibold transition">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
