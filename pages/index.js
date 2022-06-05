import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
  <>
    <Head>  
      <title>React | Next JS</title>
      <meta name='keywords' content='react next js'></meta>
    </Head>
        <div>
          <h1 className={styles.title}>Home Page</h1>
          <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
          <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
          <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
          <Link  href="/views">
            <a className={styles.btn}>Listele</a>
          </Link>
        </div>
  </>
  

  )
}
