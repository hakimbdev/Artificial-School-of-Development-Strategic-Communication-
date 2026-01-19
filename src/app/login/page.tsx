'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // API call would happen here
    setTimeout(() => {
      setLoading(false)
      // Redirect to dashboard
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-asdsc-navy to-asdsc-charcoal flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-plex-serif font-bold text-asdsc-navy mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-center text-asdsc-charcoal mb-8">Sign in to your ASDSC account</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-asdsc-navy mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-asdsc-gray rounded-lg focus:outline-none focus:border-asdsc-gold focus:ring-2 focus:ring-asdsc-gold focus:ring-opacity-20"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4" />
                <span className="ml-2 text-sm text-asdsc-charcoal">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-asdsc-gold hover:text-asdsc-navy transition">
                Forgot password?
              </Link>
            </div>

            <Button loading={loading} className="w-full" variant="primary">
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-asdsc-gray text-center">
            <p className="text-asdsc-charcoal">
              Don't have an account?{' '}
              <Link href="/signup" className="text-asdsc-gold hover:text-asdsc-navy font-semibold transition">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
