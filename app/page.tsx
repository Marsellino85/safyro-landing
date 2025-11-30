'use client'

import HeroSection from './components/HeroSection'
import ValueProps from './components/ValueProps'
import Timeline from './components/Timeline'
import EmailForm from './components/EmailForm'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '40px 16px' : '80px 40px',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
      }}>
        <HeroSection />
        <ValueProps />
        <Timeline />
        <EmailForm />
      </div>
    </main>
  )
}
