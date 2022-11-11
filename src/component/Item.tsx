import Image from "next/image";
import { FC } from "react";
import { Button, Header } from "semantic-ui-react";
import { ProductItem } from "../models/product";
import styles from "./Item.module.css";
interface Props {
  item: ProductItem;
}

const Item: FC<Props> = ({ item }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <Image
            src={item.image_link}
            alt={item.name}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{item.name}</strong>
          <strong className={styles.num_price}>${item.price}</strong>
          <span className={styles.txt_info}>
            {item.category ? `${item.category}/` : ""}
            {item.product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{item.description}</p>
    </>
  );
};

export default Item;
