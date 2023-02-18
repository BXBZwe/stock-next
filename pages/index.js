import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Zwe Min Maw </title>
    </Head>
    <h1>Zwe Min Maw Page</h1>
    <p>
      Click for more details
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
