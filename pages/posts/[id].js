import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Hero from '../../components/hero'
import Date from '../../components/date'
import { motion } from "framer-motion"

export default function Post({ postData }) {
    return (
      <motion.div 
      exit={{opacity: 0}}
      initial="inition"
      animate="animation">
        <Layout>
          <Hero>
            <h1 className="hero__header">{postData.title}</h1>
            <h2 className="hero__subheader">{postData.subtitle}</h2>
          </Hero>
          <article className="content">
            <section className="section-1">
            
                <div className="meta">
                  <Date dateString={postData.date} />
                  {/* <ul className="pills">
                    {postData.categories.map(cat => (
                      <li className="pill">{cat}</li>
                    ))}
                  </ul> */}
                </div>
                <div className="intro">
                  <p>{postData.intro}</p>
                </div>
            
            </section>
            <div className="section-1-bottom"></div>
            <section className="section-2">
            <motion.img className="section-2__img"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity:1 }}
              transition={{ delay: 0.2 }}
              src={postData.image_section2} />
            </section>
            <div className="section-2-bottom"></div>
            <section className="section-3">
              <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </section>
            <div className="section-3-bottom"></div>
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