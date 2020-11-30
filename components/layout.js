import Link from 'next/link'
import styles from './layout.module.css'

const name = 'J. Nicole Mors'
export const siteTitle = 'Portfolio website and blog of J. Nicole Mors'

export default function Layout({ children, home }) {
  return (
    <div className="global-grid__content">
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="link">← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  )
}