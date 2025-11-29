import HeroSection from './components/HeroSection'
import ValueProps from './components/ValueProps'
import Timeline from './components/Timeline'
import EmailForm from './components/EmailForm'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
      }}>
        <HeroSection />
        <ValueProps />
        <Timeline />
        <EmailForm />
      </div>
    </main>
  )
}
