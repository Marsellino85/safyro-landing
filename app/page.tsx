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
      background: '#17163e',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(30, 58, 138, 0.2) 0%, #17163e 50%, #17163e 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        width: '100%',
        maxWidth: '896px',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <HeroSection />
        <ValueProps />
        <Timeline />
        <EmailForm />
      </div>
    </main>
  )
}
