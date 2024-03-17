import Head from "next/head";
import Heading from "@/components/Heading";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { contactType } from "@/types";

type ContactsProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const res: any = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={"Contacts list"} />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
