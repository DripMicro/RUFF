import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import { Link, Stack, Text } from "@chakra-ui/react";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const links = [
    { href: "/affiliates/creative", title: "Creative Materials" },
    { href: "/affiliates/sub", title: "Sub Affiliate Creative Materials" },
  ];

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack gap={2} m={12}>
          {links.map(({ href, title }) => (
            <Link key={href} as={NextLink} href={href}>
              <Text as="b">{title}</Text>
            </Link>
          ))}
        </Stack>
      </main>
    </>
  );
};

export default Home;