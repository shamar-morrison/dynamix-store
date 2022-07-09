import { ProductInterface, Image, Asset, Slug } from '../types';
import React from 'react';
import Link from 'next/link';
import { urlFor } from 'lib/client';

interface Props {
  product: ProductInterface;
}

const Product = ({ product: { name, image, slug, price } }: Props) => {
  const imageUrl = urlFor(image?.[0]) as unknown as string;
  return (
    <div>
      <Link href={`/product/${slug.current}`} passHref>
        <div className="product-card">
          <img src={imageUrl} alt={name} width={250} height={250} className="product-image" />
          <p className="product-name">{name}</p>
          <p className="product-price">{'$' + price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
