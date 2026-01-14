import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'SAFYRO - Hybrid Project Management Platform',
  description:
    'The first true hybrid PM platform combining professional Gantt charts with true Kanban boards. Join the beta waitlist for Spring 2026. Where Precision Meets Freedom.',
  keywords: [
    'project management',
    'hybrid PM',
    'Gantt chart',
    'Kanban board',
    'project planning',
    'agile',
    'waterfall',
    'engineering projects',
    'PM software',
    'SAFYRO',
  ],
  authors: [{ name: 'SAFYRO' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://safyro.io',
    title: 'SAFYRO - Where Precision Meets Freedom',
    description:
      'Hybrid Project Management Platform for teams up to 500 employees',
    siteName: 'SAFYRO',
    images: [
      {
        url: 'https://safyro.io/logo.png',
        width: 1200,
        height: 630,
        alt: 'SAFYRO Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAFYRO - Hybrid Project Management Platform',
    description: 'Where Precision Meets Freedom',
    images: ['https://safyro.io/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
