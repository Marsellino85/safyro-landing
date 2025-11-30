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
    <>
      <Logo />
      
      <h1 style={{
        fontSize: isMobile ? '48px' : '60px',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: '1.2',
        letterSpacing: '-0.025em',
        margin: '0',
        marginBottom: '24px',
        textAlign: 'center',
      }}>
        SAFYRO
      </h1>
      
      <p style={{
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: 300,
        color: '#CBD5E1',
        lineHeight: '1.5',
        margin: '0',
        marginBottom: '32px',
        textAlign: 'center',
      }}>
        Where Precision Meets Freedom
      </p>
    </>
  )
}

