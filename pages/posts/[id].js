import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { motion, AnimatePresence } from "framer-motion"

export default function Post({ postData }) {
    return (
      <motion.div 
      exit={{opacity: 0}}
      initial="inition"
      animate="animation">
        <Layout>
          <Head>
              <title>{postData.title}</title>
          </Head>
          <article>
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity:1 }}
            transition={{ delay: 0.2 }}
            src={postData.image} />
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        </Layout>
      </motion.div>
    )
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }