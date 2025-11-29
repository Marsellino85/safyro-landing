export default function ValueProps() {
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
      gap: '12px',
      marginBottom: '48px',
    }}>
      {values.map((value, index) => (
        <p 
          key={index}
          style={{
            fontSize: '20px',
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

