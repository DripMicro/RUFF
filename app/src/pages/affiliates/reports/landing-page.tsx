import { type NextPage } from "next";
import Head from "next/head";
import { LandingPageReport } from "../../../components/affiliates/reports/LandingPageReport";
import styles from "./../../index.module.css";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page Report</title>
        <meta name="description" content="Creative Report" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ marginTop: "20px" }}>
        <LandingPageReport />
      </main>
    </>
  );
};

export default Page;
Page.Layout = "NoLayout";
