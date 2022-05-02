import { ProductInterface } from 'components/Product';
import { client } from 'lib/client';
import Head from 'next/head';
import { Product, FooterBanner, HeroBanner } from '../components';
import { BannerData } from './../components/HeroBanner';

interface Props {
  products: ProductInterface[];
  bannerData: BannerData[];
}

const Home = ({ products, bannerData }: Props) => {
  return (
    <>
      <Head>
        <title>Dynamix Tech Store - Shamar Morrison</title>
      </Head>

      {bannerData.length && <HeroBanner heroBanner={bannerData[0]} />}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product: ProductInterface) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
      <FooterBanner footerBanner={bannerData?.[0]} />
    </>
  );
};

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
}

export default Home;
