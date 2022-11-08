import type { NextPage } from "next";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | 차누땅땅</title>
        <meta name="description" content="차누땅땅 홈입니다." />
      </Head>
      <Header style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <Header style={{ paddingTop: 40 }}>신상품</Header>
      <Divider />
    </div>
  );
};

export default Home;
