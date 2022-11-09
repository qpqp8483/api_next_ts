import type { NextPage } from "next";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
import axios from "axios";
const Home: NextPage = ({ list }) => {
  return (
    <div>
      <Head>
        <title>Home | 차누땅땅</title>
        <meta name="description" content="차누땅땅 홈입니다." />
      </Head>
      <Header style={{ paddingTop: 40 }}>베스트 상품</Header>
      {list}
      <Divider />
      <Header style={{ paddingTop: 40 }}>신상품</Header>
      <Divider />
    </div>
  );
};

export default Home;

interface IList {
  props: {
    list: string;
  };
}

export async function getStaticProps(): Promise<IList> {
  const API_URL = process.env.apiurl;
  const res = await axios.get(API_URL as string);
  const data: string = res.data;

  return {
    props: {
      list: data,
    },
  };
}
