import '../styles/global.css'
import Header, { siteTitle } from '../components/header.tsx'
import Head from 'next/head'
import { AnimatePresence } from "framer-motion"



export default function App({ Component, pageProps }) {
    return <div>
      <Header>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Header>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
    
}