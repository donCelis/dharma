import Link from 'next/link';

// styles
import styles from 'src/styles/Home.module.scss';

// layout
import Page from 'src/components/Page';
import HomeHeader from 'src/components/home/HomeHeader';
import HomeHero from 'src/components/home/HomeHero';

// components
import Image from 'src/components/Image';

export default function Home() {
  const data_head = {
    title: 'Index page',
    description: 'Texto de prueba',
  };
  return (
    <Page {...data_head}>
      <HomeHeader />
      <HomeHero />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href='https://nextjs.org/docs' className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href='https://nextjs.org/learn' className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
            <Link href='/about'>
              <a className={styles.card}>
                <h2>Deploy &rarr;</h2>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </a>
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src='./images/vercel.svg' alt='logo vercel' width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Page>
  );
}
