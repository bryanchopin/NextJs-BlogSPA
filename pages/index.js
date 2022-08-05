import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Pactec Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to {''}
          <Link href="https://nextjs.org">
            <a>Pactec Services!</a>
          </Link>
        </h1>
        <h2 className="title">
          Read{' '}
          <Link href="/posts/FirstPost">
            <a>1st this page!</a>
          </Link>
        </h2>
        <h2 className="title">
          Read{' '}
          <Link href="/posts/SecondPost">
            <a>2nd this page!</a>
          </Link>
        </h2>
        <h2 className="title">
          Read{' '}
          <Link href="/posts/ThirdPost">
            <a>3rd this page!</a>
          </Link>
        </h2>

      </main>

    </div>
  )
}
