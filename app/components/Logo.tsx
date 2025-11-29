'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Logo() {
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
    <div style={{ 
      marginBottom: isMobile ? '16px' : '32px',
      textAlign: 'center',
    }}>
      <Image
        src="/logo.svg"
        alt="Safyro Logo"
        width={isMobile ? 100 : 144}
        height={isMobile ? 100 : 144}
        priority
        className="w-auto h-auto"
      />
    </div>
  )
}

