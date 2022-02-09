import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GB Portfolio</title>
        <meta name="description" content="A Gift Banda portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Portfolio Website</h1>

     <Hero />
    </div>
  )
}
