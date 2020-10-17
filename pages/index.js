import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Button from '../components/button.tsx'
import utilStyles from '../styles/utils.module.css'
import Hero from '../components/hero.tsx'
import { motion } from "framer-motion"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export default function Home({ allPostsData }) {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Hero />
      <section className="global-grid__content">
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
            <motion.div variants={fadeInUp}>
              <Button>Button!</Button>
            </motion.div>
        </section>
        <section className="global-grid__content">
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <motion.ul variants={stagger} className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, image }) => (
              <motion.li variants={fadeInUp} className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <div className="card">
                    <motion.image 
                    initial={{x: 60, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.2}} 
                    className="card__name" 
                    src={image} 
                    width={250} />
                  <a>{title}</a>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </motion.div>
  )
}

