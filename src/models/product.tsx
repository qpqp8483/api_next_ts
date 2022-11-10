export type ProductItem = {
  id: string;
  brand: string;
  name: string;
  price: string;
  price_sign: null | boolean;
  currency: null | string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category: null | string;
  product_type: string;
  tag_list: Array<string>;
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: Array<string>;
};

export type ProductItemList = Array<ProductItem>;
