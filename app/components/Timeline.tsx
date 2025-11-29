'use client'

import { useEffect, useState } from 'react'

export default function Timeline() {
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
      marginBottom: isMobile ? '32px' : '40px',
      width: '100%',
    }}>
      <p style={{
        fontSize: isMobile ? '18px' : '24px',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: '1.2',
        letterSpacing: '0',
        margin: '0',
      }}>
        Beta launching Spring 2026
      </p>
    </section>
  )
}

