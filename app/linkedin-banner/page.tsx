'use client';

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function LinkedInBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!bannerRef.current) return;

    try {
      // Use higher scale for better detail capture, then resize
      const canvas = await html2canvas(bannerRef.current, {
        width: 1584,
        height: 396,
        scale: 2, // Higher scale for better detail
        useCORS: true,
        backgroundColor: null,
        windowWidth: 1584,
        windowHeight: 396,
        logging: false,
        allowTaint: false,
        removeContainer: false,
      });

      // Resize to exact dimensions with high quality
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = 1584;
      finalCanvas.height = 396;
      const ctx = finalCanvas.getContext('2d');
      if (ctx) {
        // Use high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(canvas, 0, 0, 1584, 396);
      }

      // Create download link
      const link = document.createElement('a');
      link.download = 'safyro-linkedin-banner.png';
      link.href = finalCanvas.toDataURL('image/png', 1.0); // Maximum quality
      link.click();
    } catch (error) {
      console.error('Error exporting banner:', error);
      alert('Error exporting banner. Please try again.');
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0F1C',
        padding: '40px 20px',
        gap: '32px',
      }}
    >
      <div
        ref={bannerRef}
        style={{
          width: '1584px',
          height: '396px',
          aspectRatio: '4 / 1',
          position: 'relative',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Left Side - Gantt Chart Style */}
        <div
          style={{
            position: 'absolute',
            left: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '280px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* Grid lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(226, 232, 240, 0.25) 0px,
                rgba(226, 232, 240, 0.25) 1px,
                transparent 1px,
                transparent 40px
              )
            `,
              pointerEvents: 'none',
            }}
          />

          {/* Gantt bars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '120px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.6)',
                borderRadius: '2px',
                marginLeft: '20px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '180px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.5)',
                borderRadius: '2px',
                marginLeft: '40px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '90px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.7)',
                borderRadius: '2px',
                marginLeft: '10px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '200px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.4)',
                borderRadius: '2px',
                marginLeft: '60px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '150px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.6)',
                borderRadius: '2px',
                marginLeft: '30px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '110px',
                height: '12px',
                background: 'rgba(37, 99, 235, 0.5)',
                borderRadius: '2px',
                marginLeft: '50px',
              }}
            />
          </div>
        </div>

        {/* Center - Logo and Branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <Image
              src="/logo.png"
              alt="SAFYRO Logo"
              width={120}
              height={120}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Brand Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
              margin: '0',
              marginBottom: '8px',
              textAlign: 'center',
            }}
          >
            SAFYRO
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '24px',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.5',
              margin: '0',
              textAlign: 'center',
            }}
          >
            Where Precision Meets Freedom
          </p>
        </div>

        {/* Right Side - Kanban Board */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '280px',
            height: '200px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
          }}
        >
          {/* Column 1 */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '32px',
                background: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '48px',
                background: 'rgba(37, 99, 235, 0.4)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '28px',
                background: 'rgba(37, 99, 235, 0.25)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '40px',
                background: 'rgba(37, 99, 235, 0.35)',
                borderRadius: '4px',
              }}
            />
          </div>

          {/* Column 2 */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '40px',
                background: 'rgba(37, 99, 235, 0.35)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '28px',
                background: 'rgba(37, 99, 235, 0.25)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '52px',
                background: 'rgba(37, 99, 235, 0.45)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '36px',
                background: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '4px',
              }}
            />
          </div>

          {/* Column 3 */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '44px',
                background: 'rgba(37, 99, 235, 0.4)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '30px',
                background: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '38px',
                background: 'rgba(37, 99, 235, 0.35)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '46px',
                background: 'rgba(37, 99, 235, 0.4)',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>

        {/* Bottom Right - Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '80px',
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          safyro.io
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={handleExport}
        style={{
          padding: '12px 32px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#FFFFFF',
          background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
        }}
      >
        📥 Download Banner (1584×396px PNG)
      </button>
    </div>
  );
}
