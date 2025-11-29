'use client'

import { useState, useEffect } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setLoading(true)
    setMessage('')

    try {
      console.log('Email submitted:', email)
      
      setMessageType('success')
      setMessage('✓ Thanks! You\'ve been added to the waitlist.')
      setEmail('')
      
      setTimeout(() => setMessage(''), 4000)
    } catch (error) {
      setMessageType('error')
      setMessage('Error submitting email. Please try again.')
      setTimeout(() => setMessage(''), 4000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: isMobile ? '0 16px' : '0 24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: isMobile ? '100%' : '640px',
        padding: isMobile ? '16px' : '20px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}>
        <h3 style={{
          fontSize: isMobile ? '18px' : '20px',
          fontWeight: 500,
          color: '#FFFFFF',
          textAlign: 'center',
          margin: '0',
          marginBottom: '8px',
        }}>
          Join the Beta Waitlist
        </h3>

        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '12px',
            width: '100%',
            alignItems: isMobile ? 'stretch' : 'center',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            disabled={loading}
            style={{
              flex: 1,
              padding: '0 20px',
              height: '56px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 400,
              color: '#FFFFFF',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.border = '1px solid #0F52BA'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 82, 186, 0.2)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
          
          <button
            type="submit"
            disabled={loading || !email}
            style={{
              padding: isMobile ? '0 16px' : '0 24px',
              width: isMobile ? 'auto' : 'auto',
              height: isMobile ? '48px' : '56px',
              borderRadius: '8px',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              border: 'none',
              cursor: loading || !email ? 'not-allowed' : 'pointer',
              background: loading || !email ? '#334155' : '#0F52BA',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!loading && email) {
                e.currentTarget.style.background = '#2563EB'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0px 8px 24px rgba(15, 82, 186, 0.3)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0F52BA'
              e.currentTarget.style.transform = 'translateY(0px)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {loading ? 'Joining...' : 'Join Beta   →'}
          </button>
        </form>

        <p style={{
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: 400,
          color: '#718096',
          textAlign: 'center',
          lineHeight: '1.4',
          margin: '0',
        }}>
          Early access   •   Priority support   •   Shape the future
        </p>
      </div>

      {message && (
        <p style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '14px',
          fontWeight: 400,
          color: messageType === 'success' ? '#E2E8F0' : '#FF6B6B',
        }}>
          {message}
        </p>
      )}
    </section>
  )
}
