import Head from 'next/head';
import Image from 'next/image';
import styles from './blog.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Brychxpin';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <div className={styles.paragraph}>
        <p>
            I am a software engineer and a web developer. I am passionate about web development and the intersection of technology and design.
        </p>
      </div>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
    </div>
  );
}