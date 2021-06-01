import Head from 'next/head'
import { Header } from '../components/Header'
 export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | Home</title>
      </Head>

      <main>
        <section>
          <span>👏 Hello, stranger!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
      <h1>Test</h1>
    </>
  )
}
