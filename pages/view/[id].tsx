import { GetServerSideProps, GetStaticProps } from "next";

const Detail = ({ context }) => {};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const id = context.params.id;
  //   const API_URL;
  return {
    props: {
      context,
    },
  };
};
