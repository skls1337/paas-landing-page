import type { AppProps } from 'next/app'
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
