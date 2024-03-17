import Heading from "@/components/Heading";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text={"404"} />
      <Heading tag={"h2"} text={"Something is going wrong..."} />
    </div>
  );
};

export default Error;
