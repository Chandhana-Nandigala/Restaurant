import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chinku's Pizza World</title>
        <meta name="description" content="Dine into Chinku" />
        <link rel="icon" href="pizza.ico" />
      </Head>
      <div>
        <Featured />
      </div>
    </div>
  );
}
