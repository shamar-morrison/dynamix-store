import { client } from 'lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['product1', 'product2', 'product3'].map(product => {
          return <p>{product}</p>;
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export async function getServerSideProps() {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
}

export default Home;
