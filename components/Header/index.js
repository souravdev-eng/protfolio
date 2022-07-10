import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <Head>
      <div className={styles.container}>
        <div>
          <Link href='/'>
            <a className={styles.heading}>Sourav Majumdar</a>
          </Link>
        </div>
        <div className={styles.menu_container}>
          <Link href='/projects'>
            <a className={styles.link}>Projects</a>
          </Link>
          <Link href='/capabilities'>
            <a className={styles.link}>Capabilities</a>
          </Link>
          <Link href='/contact'>
            <a className={styles.link}>Contact</a>
          </Link>
        </div>
      </div>
    </Head>
  );
};

export default Header;
