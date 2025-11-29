'use client'

import Logo from './Logo'
import { useEffect, useState } from 'react'

export default function HeroSection() {
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
    <section style={{ 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: isMobile ? '32px' : '48px',
      width: '100%',
    }}>
      <Logo />
      
      <h1 style={{
        fontSize: isMobile ? '56px' : '96px',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        margin: '0',
        marginBottom: '24px',
      }}>
        SAFYRO
      </h1>
      
      <p style={{
        fontSize: isMobile ? '20px' : '32px',
        fontWeight: 400,
        color: '#E2E8F0',
        lineHeight: '1.3',
        letterSpacing: '-0.005em',
        margin: '0',
      }}>
        Where Precision Meets Freedom
      </p>
    </section>
  )
}

