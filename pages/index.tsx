import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import { FC } from "react";
import { socialType } from "@/types";
import { GetStaticProps } from "next";

type HelloProps = {
  socials: [socialType];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res: any = await fetch(`${process.env.API_HOST}/socials`);
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: {
        socials: null,
      },
    };
  }
};

const Hello: FC<HelloProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
    </div>
  );
};

export default Hello;
