import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Hero from '../components/hero.tsx'
import Search from '../components/search'
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

function isBlogPosts (post) { return post.type === 'blog' }

export default function Home({ allPostsData }) {
  const blogPostsData = allPostsData.filter( isBlogPosts )
  const portfolioPostsData = allPostsData.filter( post => post.type === 'work' )
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Hero>
        <div className="home-hero">
          <h1>
            <div className="home-hero__title">
              Designer
              <span className="home-hero__and">&amp;</span>
            </div>
            <hr className="home-hero__divider" />
            <span className="home-hero__whatever">Developer</span>
          </h1>
        </div>
      </Hero>
      <div className="content">
        <section className="section-1">
          <div className="intro">
            <h2>It's strange times...</h2>
            <h3>I have never felt so utterly at the mercy of Mother Nature than I have this year.</h3>
            <p>As Designers we exert control as a part of our jobs. We apply order to chaos. Every pixel is placed with precision. We relish orchestrating look, feel and experience. It's been truly humbling to be reminded this year... that I am just an animal existing on a planet, rotating through the universe. I cannot control any of the effects of a global pandemic and civil unrest that is affecting all of my fellow human animals. It is these effects we are all experiencing together. I can feel the connectedness even if we are all disconnected from each other in so many ways. This is the light in the darkness.
            </p>
          </div>
        </section>
        <div className="section-1-bottom"></div>
        <section className="section-2">
          <div className="section__header">
            <h3>Recent Blog Posts</h3>
            <motion.div variants={fadeInUp}>
                  <Search />
            </motion.div>
          </div>
            <motion.ul variants={stagger}  className="card__layout">
              {blogPostsData.map(({ id, date, title, subtitle }) => (
                <motion.li variants={fadeInUp} className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="card">
                      <motion.div
                      initial={{x: 60, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.2}} 
                      className="card__image" >
                        <a className="card__title">{title}</a>
                      </motion.div>
                      <div className="card__content">
                        
                        <a className="card__sub-title">{subtitle}</a>
                        <br />
                        <div className="card__date">
                          <Date dateString={date} />
                        </div>
                      </div>
                    </a>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
        </section>
        <div className="section-2-bottom"></div>
        <section className="section-3">
          <h3 className="section__header">Recent Projects</h3>
            <motion.ul variants={stagger} className="card__layout">
              {portfolioPostsData.map(({ id, date, title, subtitle }) => (
                <motion.li variants={fadeInUp} className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a className="card">
                    <motion.div
                    initial={{x: 60, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.2}} 
                    className="card__image" >
                      <a className="card__title">{title}</a>
                    </motion.div>
                    <div className="card__content">
                      
                      <a className="card__sub-title">{subtitle}</a>
                      <br />
                      <div className="card__date">
                        <Date dateString={date} />
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.li>
              ))}
            </motion.ul>
        </section>
        <div className="section-1-bottom"></div>
      </div>
    </motion.div>
  )
}

