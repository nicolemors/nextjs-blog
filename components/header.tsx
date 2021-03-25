
import Head from 'next/head'
import Logo from './logo'
import Switcher from './theme-switcher'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const name = 'J. Nicole Mors'
export const siteTitle = 'Portfolio website and blog of J. Nicole Mors'

export default function Header(props) {
  return (
    <div className="global-grid__content header__fixed">
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Portfolio website and blog of J. Nicole Mors"
          content="Product Design"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        {props.home ? (
          <div className="header__logo">
            <Logo />
            <h1 className={utilStyles.hidden_visually}>{name}</h1>
          </div>
        ) : (
          <>
          <div className="header__logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            </div>
          </>
        )}
      </header>
      <div className="header divider">
        <Switcher />
      </div>
    </div>
  )
}