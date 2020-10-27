import Link from 'next/link'
import Date from './date'
import { motion } from "framer-motion"
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

let easing = [0.6, -0.05, 0.01, 0.99];

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

  {blogPostsData.map(({ id, date, title, image, subtitle }) => (
    <motion.li variants={fadeInUp} className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <div className="card">
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
        </div>
      </Link>
    </motion.li>
  ))}