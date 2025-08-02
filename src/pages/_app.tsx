import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';

import { Karla, Ms_Madi } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-karla',
  display: 'swap',
});

const parisienne = Ms_Madi({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-parisienne',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <div className={`${karla.variable} ${parisienne.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
