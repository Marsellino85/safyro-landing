import Image from 'next/image'

export default function Logo() {
  return (
    <div style={{ marginBottom: '32px' }}>
      <Image
        src="/logo.svg"
        alt="Safyro Logo"
        width={144}
        height={144}
        priority
        className="w-auto h-auto"
      />
    </div>
  )
}

