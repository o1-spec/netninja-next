import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja"/>
      </Head>
            <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          reprehenderit culpa molestiae ex totam, necessitatibus voluptatum quas
          quam, quaerat corrupti assumenda quis! Ipsum inventore iure, facere
          beatae reiciendis repellendus perferendis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          reprehenderit culpa molestiae ex totam, necessitatibus voluptatum quas
          quam, quaerat corrupti assumenda quis! Ipsum inventore iure, facere
          beatae reiciendis repellendus perferendis!
        </p>
        <Link className={styles.btn} href="/ninjas">
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
