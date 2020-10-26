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