import { GetStaticProps } from "next";
import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { postType } from "@/types";

type PostsProps = {
  posts: [postType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={"Posts list:"} />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
