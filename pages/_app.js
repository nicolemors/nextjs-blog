import '../styles/global.css'
import Header, { siteTitle } from '../components/header.tsx'
import Head from 'next/head'
import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'



export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHome = router.pathname === "/"
    return <div>
      <Header home={isHome}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Header>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
    
}