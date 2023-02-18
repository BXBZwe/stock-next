import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <h1>About Page</h1>
    <p>
      About Me
    </p>
    <p>
        hi, My name is Zwe Min Maw.
    </p>
    <Link href="/">Home</Link>
    </>
  )
}
