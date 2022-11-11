import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import Item from "../../src/component/Item";
import { ProductItemList, ProductItem } from "../../src/models/product";

interface Props {
  item: ProductItem;
}

const Post: NextPage<Props> = ({ item }) => {
  return (
    <div>
      <Item item={item}></Item>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string; // 질문 : params로 하면 오류 -> ParsedUrlQuery | undefined로 인식 ->타입을 어떻게 설정해야하는지 모르겠음
  const API_URL: string = `http:makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data: ProductItemList = res.data;
  return {
    props: {
      item: data,
    },
  };
};
