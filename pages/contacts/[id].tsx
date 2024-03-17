import ContactInfo from "@/components/ContactInfo";
import Head from "next/head";
import { contactType } from "@/types";

import { GetServerSideProps } from "next";
import { FC } from "react";

type ContactProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;
  const res: any = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<ContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
