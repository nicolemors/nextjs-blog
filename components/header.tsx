import styles from './header.module.css'
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const name = 'Nicole Mors'
export const siteTitle = 'J. Nicole Mors'

export default function Header({ children, home }) {
  return (
    <div>
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
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/logo-dark.png"
              className={styles.header__logo}
              alt={name}
            />
            <h1 className={utilStyles.hidden_visually}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo-dark.png"
                  className={styles.header__logo}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}