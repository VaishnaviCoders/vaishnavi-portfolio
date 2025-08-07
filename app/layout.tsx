import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Vaishnavi Raykar - Social Work Professional',
  description:
    'Personal portfolio of Vaishnavi Navnath Raykar, an aspiring social worker with a passion for child welfare and community development.',
  keywords:
    'Vaishnavi Raykar, social work, MSW, child welfare, community development, Pune, Maharashtra',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
