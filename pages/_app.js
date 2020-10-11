import '../styles/global.css'
import Header, { siteTitle } from '../components/header.tsx'
import Switcher from '../components/theme-switcher.tsx'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <div>
      <Header>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Header>
      <Switcher />
      <Component {...pageProps} />
    </div>
    
}