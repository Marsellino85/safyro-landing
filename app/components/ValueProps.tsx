'use client';

import { useEffect, useState } from 'react';

export default function ValueProps() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const values = [
    'Waterfall precision meets Agile flexibility',
    'Real-time cost tracking & budget monitoring',
    "Structure when you need it. Freedom when you don't",
  ];

  const CheckCircleIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'left',
        marginBottom: '48px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {values.map((value, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#CBD5E1',
            }}
          >
            <CheckCircleIcon />
            <span
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: 400,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
