'use client'

import { useEffect, useState } from 'react'

export default function ValueProps() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const values = [
    '✓ Waterfall precision & Agile flexibility',
    '✓ One platform, zero methodology lock-in',
    '✓ Structure when you need it. Freedom when you don\'t',
  ]

  return (
    <section style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: isMobile ? '10px' : '12px',
      marginBottom: isMobile ? '32px' : '48px',
    }}>
      {values.map((value, index) => (
        <p 
          key={index}
          style={{
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: 400,
            color: '#A0AEC0',
            lineHeight: '1.3',
            letterSpacing: '0',
            margin: '0',
          }}
        >
          {value}
        </p>
      ))}
    </section>
  )
}

