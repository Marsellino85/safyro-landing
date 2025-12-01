'use client'

import { useState, useEffect } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join waitlist')
    } finally {
      setLoading(false)
    }
  }

  const ArrowRightIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: '8px' }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: isMobile ? 'calc(100% - 40px)' : '500px',
      margin: '0 auto',
      width: '100%',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#FFFFFF',
        margin: '0',
        marginBottom: '24px',
        textAlign: 'center',
      }}>
        Join the Beta Waitlist
      </h2>

      <form 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '16px' : '12px',
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          style={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto',
            height: '48px',
            padding: '0 16px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 400,
            color: '#FFFFFF',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.5)'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            height: '48px',
            padding: '0 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#FFFFFF',
            background: '#2563EB',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            opacity: loading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#1D4ED8'
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#2563EB'
            }
          }}
        >
          {loading ? 'Joining...' : (
            <>
              Join Beta <ArrowRightIcon />
            </>
          )}
        </button>
      </form>

      {success && (
        <p style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#10B981',
          textAlign: 'center',
          margin: '0',
          marginTop: '16px',
        }}>
          ✓ Thanks! You've been added
        </p>
      )}

      {error && (
        <p style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#EF4444',
          textAlign: 'center',
          margin: '0',
          marginTop: '16px',
        }}>
          {error}
        </p>
      )}

      {!success && !error && (
        <p style={{
          fontSize: isMobile ? '10px' : '12px',
          fontWeight: 400,
          color: '#64748B',
          textAlign: 'center',
          margin: '0',
          marginTop: '16px',
        }}>
          <span style={{ color: '#94A3B8', fontWeight: 500 }}>Early access</span> • 
          <span style={{ color: '#94A3B8', fontWeight: 500 }}> Priority support</span> • 
          <span style={{ color: '#94A3B8', fontWeight: 500 }}> Shape the future</span>
        </p>
      )}
    </div>
  )
}
