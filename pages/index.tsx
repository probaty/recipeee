import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header userName="PIDARAS" />
    </>
  );
}
