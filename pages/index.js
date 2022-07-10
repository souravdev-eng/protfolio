import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Skills from '../components/Skills';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sourav Majumdar | Frontend | Backend | Mobile</title>
        <meta name='description' content='sourav majumdar description' />
      </Head>
      <main>
        <section className={styles.section_heading}>
          <div className={styles.header}>
            <p className={styles.subtitle}>Hi there, I'm Sourav 👋</p>
            <h3 className={styles.title}>Front-end/Back-end & Mobile developer</h3>
            <h4 className={styles.description}>
              I help people and brands reach their goals by designing & building user-centric digital products and interactive experiences
            </h4>
            <div className={styles.button_container}>
              <div className={styles.active_button}>
                <Link href='/projects'>
                  <a className={styles.active_button_text}>View my work</a>
                </Link>
              </div>
              <div className={styles.button}>
                <Link href='/projects'>
                  <a className={styles.button_text}>More about me</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.image_container}>
            <Image src={'/static/img/sourav.png'} width={450} height={450} style={styles.image} />
          </div>
        </section>
        <Skills />
      </main>
    </div>
  );
}
