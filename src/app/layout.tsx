import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import '@styles/globals.css';
import Header from '@components/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Nikita Bashaiev',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${GeistSans.className} bg-surface text-secondary grid-cols-content grid`}
      >
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
