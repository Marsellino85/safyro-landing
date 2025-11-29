import Logo from './Logo'

export default function HeroSection() {
  return (
    <section style={{ 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '48px',
    }}>
      <Logo />
      
      <h1 style={{
        fontSize: '96px',
        fontWeight: 700,
        color: '#FFFFFF',
        margin: '0',
        marginBottom: '24px',
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
      }}>
        SAFYRO
      </h1>
      
      <p style={{
        fontSize: '32px',
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

