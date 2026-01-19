'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-2xl font-bold font-plex-serif ${
            isScrolled ? 'text-asdsc-navy' : 'text-white'
          }`}>
            ASDSC
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="#features" className={`hover:text-asdsc-gold transition ${
              isScrolled ? 'text-asdsc-navy' : 'text-white'
            }`}>
              Features
            </Link>
            <Link href="#certification" className={`hover:text-asdsc-gold transition ${
              isScrolled ? 'text-asdsc-navy' : 'text-white'
            }`}>
              Certification
            </Link>
            <Link href="#pricing" className={`hover:text-asdsc-gold transition ${
              isScrolled ? 'text-asdsc-navy' : 'text-white'
            }`}>
              Pricing
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className={`hover:text-asdsc-gold transition ${
              isScrolled ? 'text-asdsc-navy' : 'text-white'
            }`}>
              Sign In
            </Link>
            <Link href="/signup" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen text-white pt-24 px-6 flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/ddgtxaels/image/upload/v1768825150/medium-shot-colleagues-talking_mnwt15.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-plex-serif font-bold mb-6 leading-tight">
            Build Authority.<br />Communicate Impact.<br />
            <span className="text-asdsc-gold">Earn Verified Credentials.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-reading-lg">
            Master Development & Strategic Communication with AI-powered adaptive learning and professional certificates backed by global standards.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary bg-asdsc-gold text-asdsc-navy hover:bg-opacity-90">
              Start Learning Now
            </Link>
            <Link href="#features" className="btn-primary border-2 border-asdsc-gold text-asdsc-gold hover:bg-asdsc-gold hover:text-asdsc-navy">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-asdsc-off-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-plex-serif font-bold text-center mb-16 text-asdsc-navy">
            Powerful Features for Professional Growth
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                AI Tutors
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                Get personalized feedback on writing, tone, and clarity from our advanced AI learning system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                Verified Certificates
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                AI-generated signatures, QR verification, and LinkedIn-ready credentials upon completion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                Progress Tracking
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                Beautiful dashboards, smart nudges, and achievement highlights to keep you motivated.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                Lightning Fast
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                60-120fps smooth scrolling, lazy-loaded content, and optimized for all devices.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                Adaptive Learning
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                Content tailored to your role: scholar, lecturer, officer, NGO leader, or student.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card-premium">
              <div className="text-4xl mb-4">♿</div>
              <h3 className="text-2xl font-plex-serif font-bold mb-4 text-asdsc-navy">
                Accessible Design
              </h3>
              <p className="text-asdsc-charcoal leading-reading">
                WCAG-compliant, offline-capable, and designed for everyone to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-plex-serif font-bold text-center mb-12 text-asdsc-navy">
            Industry-Recognized Certificates
          </h2>
          <div className="card-premium text-center">
            <div className="text-6xl mb-6">🏆</div>
            <p className="text-lg text-asdsc-charcoal mb-6 leading-reading-lg">
              Receive AI-generated certificates with verified signatures, unique Certificate IDs, and QR codes. Share on LinkedIn and boost your professional profile instantly.
            </p>
            <Link href="/signup" className="btn-secondary inline-block">
              Earn Your Certificate Today
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-asdsc-off-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-plex-serif font-bold text-center mb-16 text-asdsc-navy">
            Transparent Pricing for Your Growth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="card-premium">
              <h3 className="text-2xl font-plex-serif font-bold mb-2 text-asdsc-navy">
                Explorer
              </h3>
              <p className="text-asdsc-gold font-bold text-3xl mb-6">Free</p>
              <ul className="space-y-4 mb-8 text-asdsc-charcoal">
                <li>✓ 2 Preview Modules</li>
                <li>✓ Basic Progress Tracking</li>
                <li>✓ Community Access</li>
                <li>✗ Certificates</li>
              </ul>
              <Link href="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="card-premium border-2 border-asdsc-gold transform scale-105">
              <span className="inline-block bg-asdsc-gold text-asdsc-navy px-4 py-1 rounded-full text-sm font-bold mb-4">
                MOST POPULAR
              </span>
              <h3 className="text-2xl font-plex-serif font-bold mb-2 text-asdsc-navy">
                Professional
              </h3>
              <p className="text-asdsc-gold font-bold text-3xl mb-6">$99 <span className="text-lg">/month</span></p>
              <ul className="space-y-4 mb-8 text-asdsc-charcoal">
                <li>✓ All Modules</li>
                <li>✓ AI Tutor Access</li>
                <li>✓ Verified Certificates</li>
                <li>✓ Premium Support</li>
              </ul>
              <Link href="/signup" className="btn-secondary w-full text-center">
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="card-premium">
              <h3 className="text-2xl font-plex-serif font-bold mb-2 text-asdsc-navy">
                Enterprise
              </h3>
              <p className="text-asdsc-gold font-bold text-3xl mb-6">Custom</p>
              <ul className="space-y-4 mb-8 text-asdsc-charcoal">
                <li>✓ Custom Programs</li>
                <li>✓ Institutional Licensing</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Support</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-asdsc-navy to-asdsc-emerald text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-plex-serif font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 leading-reading-lg">
            Join thousands of professionals building authority and earning verified credentials.
          </p>
          <Link href="/signup" className="btn-secondary inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-asdsc-charcoal text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-plex-serif font-bold text-lg mb-4 text-asdsc-gold">ASDSC</h4>
              <p className="text-gray-300 text-sm">
                Artificial School of Development & Strategic Communication
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#features" className="hover:text-asdsc-gold transition">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-asdsc-gold transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-asdsc-gold transition">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-asdsc-gold transition">About</Link></li>
                <li><Link href="#" className="hover:text-asdsc-gold transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-asdsc-gold transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-asdsc-gold transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-asdsc-gold transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-asdsc-gold transition">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 ASDSC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
