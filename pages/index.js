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
      <div class="content">
        <section className="section-1">
          <div class="intro">
            <h2>Headline...</h2>
            <p>
              Citizens of distant epochs venture at the edge of forever hundreds of thousands corpus callosum bits of moving fluff. 
              Are creatures of the cosmos Sea of Tranquility the carbon in our apple pies the only home we've ever known a very small 
              stage in a vast cosmic arena gathered by gravity. Extraordinary claims require extraordinary evidence tendrils of gossamer 
              clouds extraordinary claims require extraordinary evidence extraordinary claims require extraordinary evidence courage of 
              our questions courage of our questions.
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
              {blogPostsData.map(({ id, date, title, image }) => (
                <motion.li variants={fadeInUp} className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <div className="card">
                      <motion.image 
                      initial={{x: 60, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{delay: 0.2}} 
                      className="card__image" 
                      src={image} />
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
        <div className="section-2-bottom"></div>
        <section className="section-3">
          <h3 className="section__header">Recent Projects</h3>
            <motion.ul variants={stagger} className="card__layout">
              {portfolioPostsData.map(({ id, date, title, image }) => (
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
        <div className="section-1-bottom"></div>
        <footer className="section-footer"></footer>
      </div>
    </motion.div>
  )
}

