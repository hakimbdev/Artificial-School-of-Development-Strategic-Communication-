'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardBody, ProgressBar, Skeleton } from '@/components'

interface DashboardModule {
  id: string
  title: string
  progress: number
  duration: number
  completed: boolean
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [modules, setModules] = useState<DashboardModule[]>([])

  useEffect(() => {
    // Simulate loading modules
    setTimeout(() => {
      const moduleData: DashboardModule[] = [
        {
          id: '1',
          title: 'Strategic Communication Fundamentals',
          progress: 65,
          duration: 120,
          completed: false,
        },
        {
          id: '2',
          title: 'Development Impact & Measurement',
          progress: 40,
          duration: 180,
          completed: false,
        },
        {
          id: '3',
          title: 'Advanced Leadership Skills',
          progress: 85,
          duration: 150,
          completed: false,
        },
        {
          id: '4',
          title: 'Digital Transformation Strategy',
          progress: 100,
          duration: 120,
          completed: true,
        },
      ]
      setModules(moduleData)
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="min-h-screen bg-asdsc-off-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-plex-serif font-bold text-asdsc-navy">
            Learning Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-asdsc-gold flex items-center justify-center text-asdsc-navy font-bold">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-plex-serif font-bold text-asdsc-navy mb-2">
            Welcome Back!
          </h2>
          <p className="text-asdsc-charcoal">
            Continue your learning journey and earn professional credentials.
          </p>
        </section>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <>
              <Skeleton height="h-24" count={3} />
            </>
          ) : (
            <>
              <Card>
                <CardBody className="text-center">
                  <div className="text-4xl font-bold text-asdsc-gold mb-2">3</div>
                  <p className="text-asdsc-charcoal">In Progress</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="text-center">
                  <div className="text-4xl font-bold text-asdsc-gold mb-2">1</div>
                  <p className="text-asdsc-charcoal">Completed</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="text-center">
                  <div className="text-4xl font-bold text-asdsc-gold mb-2">52%</div>
                  <p className="text-asdsc-charcoal">Overall Progress</p>
                </CardBody>
              </Card>
            </>
          )}
        </div>

        {/* Active Modules */}
        <section>
          <h3 className="text-2xl font-plex-serif font-bold text-asdsc-navy mb-6">
            Your Modules
          </h3>
          <div className="space-y-6">
            {loading ? (
              <Skeleton height="h-32" count={3} />
            ) : (
              modules.map((module: any) => (
                <Card key={module.id} hoverable>
                  <CardBody>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-plex-serif font-bold text-asdsc-navy">
                          {module.title}
                        </h4>
                        <p className="text-sm text-asdsc-charcoal mt-1">
                          {module.duration} minutes
                        </p>
                      </div>
                      {module.completed && (
                        <span className="bg-asdsc-emerald text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Completed
                        </span>
                      )}
                    </div>
                    <ProgressBar
                      progress={module.progress}
                      label={`Progress: ${module.progress}%`}
                      color="gold"
                    />
                    <div className="mt-4">
                      <Link
                        href={`/learning/${module.id}`}
                        className="text-asdsc-gold hover:text-asdsc-navy font-semibold transition"
                      >
                        {module.progress === 100 ? 'View Certificate' : 'Continue Learning'} →
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
