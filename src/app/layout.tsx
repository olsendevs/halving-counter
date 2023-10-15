import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitcoin halving',
  description:
    'Show how much time in days, weeks and months until Bitcoin next halving.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Show how much time in days, weeks and months until Bitcoin next halving."
        />

        <meta
          property="og:title"
          content="Bitcoin Halving"
        />
        <meta
          property="og:description"
          content="Show how much time in days, weeks and months until Bitcoin next halving."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/528860?s=200&v=4"
        />
        <meta
          property="og:url"
          content="https://weeksuntilhalving.live"
        />
        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://weeksuntilhalving.live"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
