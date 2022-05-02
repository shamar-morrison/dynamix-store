import React from 'react'
import Link from 'next/link';
import { urlFor } from 'lib/client';

export interface ProductInterface {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  details: string;
  image: Image[];
  name: string;
  price: number;
  slug: Slug;
}

export interface Image {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}

interface Props {
  product: ProductInterface;
}

const Product = ({ product: { name, image, slug, price } }: Props) => {
  const imageUrl = urlFor(image?.[0]) as unknown as string;
  console.log('====================================');
  console.log(imageUrl);
  console.log('====================================');
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={imageUrl} alt={name} width={250} height={250} className="product-image" />
          <p className="product-name">{name}</p>
          <p className="product-price">{'$' + price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product
