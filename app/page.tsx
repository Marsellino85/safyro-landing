import HeroSection from './components/HeroSection'
import ValueProps from './components/ValueProps'
import Timeline from './components/Timeline'
import EmailForm from './components/EmailForm'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6 py-20 md:py-24">
      <div className="w-full max-w-[640px] flex flex-col items-center text-center">
        <HeroSection />
        <ValueProps />
        <Timeline />
        <EmailForm />
      </div>
    </main>
  )
}
