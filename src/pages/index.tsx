import Head from 'next/head'
import { GetServerSideProps } from 'next'


import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

 export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>ig.news | Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hello, stranger!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD'}).format(product.amount)} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1IxxQlLKp1cFzXyMDYltGYKO');

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}