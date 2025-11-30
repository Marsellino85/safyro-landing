'use client'

import Image from 'next/image'

export default function Logo() {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '32px',
    }}>
      <div style={{
        width: '96px',
        height: '96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src="/logo.svg"
          alt="SAFYRO"
          width={96}
          height={96}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

