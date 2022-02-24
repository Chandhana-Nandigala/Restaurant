import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chinku's PizzaHub</title>
        <meta name="description" content="Dine into Chinku" />
        <link rel="icon" href="pizza.ico" />
      </Head>

     
    </div>
  )
}
