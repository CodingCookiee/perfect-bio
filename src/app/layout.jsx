import './styles/globals.css';
import { Inter } from 'next/font/google';
import Header from './components/server/Header';
import Footer from './components/server/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  // metadataBase: new URL('https://perfectbio.com'),
  title: 'Perfect Bio - AI-Powered Bio Generator',
  description: 'Create professional, engaging, and platform-optimized bios in seconds with our AI-powered bio generator.',
  keywords: 'bio generator, AI bio, professional bio, LinkedIn bio, Twitter bio, Instagram bio, personal branding',
  authors: [{ name: 'Perfect Bio Team' }],
  creator: 'Perfect Bio',
  publisher: 'Perfect Bio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Perfect Bio - AI-Powered Bio Generator',
    description: 'Create professional, engaging, and platform-optimized bios in seconds with our AI-powered bio generator.',
    // url: 'https://perfectbio.com',
    siteName: 'Perfect Bio',
    images: [
      {
        url: '/app/app-icon.png',
        width: 1200,
        height: 630,
        alt: 'Perfect Bio - AI-Powered Bio Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Bio - AI-Powered Bio Generator',
    description: 'Create professional, engaging, and platform-optimized bios in seconds with our AI-powered bio generator.',
    images: ['/app/app-icon.png'],
    creator: '@perfectbio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icons: {
      icon: [
        {
          url: '/app/favicon.svg',
          type: 'image/svg+xml',
          sizes: '512x512',
        },
      ],
      shortcut: { url: '/app/favicon.png' },
    },
  },
  manifest: '/site.webmanifest',
  // verification: {
  //   google: 'google-site-verification-code',
  //   yandex: 'yandex-verification-code',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
