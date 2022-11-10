import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { ProductItemList } from "../src/models/product";

interface Props {
  list: ProductItemList;
}

const Home: NextPage<Props> = ({ list }) => {
  return (
    <div>
      <Head>
        <title>Home | 차누땅땅</title>
        <meta name="description" content="차누땅땅 홈입니다." />
      </Head>
      <Header style={{ paddingTop: 40 }}>베스트 상품</Header>
      <ItemList list={list.slice(0, 9)} />
      <Divider />
      <Header style={{ paddingTop: 40 }}>신상품</Header>
      <ItemList list={list.slice(9)} />
      <Divider />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
  const res = await axios.get(API_URL);
  const data: ProductItemList = res.data;

  return {
    props: {
      list: data,
    },
  };
};
