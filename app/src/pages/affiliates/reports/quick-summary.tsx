import { type NextPage } from "next";
import Head from "next/head";
import { QuickSummaryReport } from "../../../components/affiliates/reports/QuickSummaryReport";
import styles from "./../../index.module.css";
import type { MyPage } from "../../../components/common/types";
const Page: MyPage = () => {
  return (
    <>
      <Head>
        <title>Quick Summary Report</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <QuickSummaryReport />
      </main>
    </>
  );
};

export default Page;
Page.Layout = "Affiliates";
