import React from 'react';
import {client} from '../lib/client'
import { HeroBanner,FooterBanner, Product } from '../components';

const Home = ({products,banners}) => {
  return (
    <>
    <HeroBanner banner={banners.length>0 && banners[0]} />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many Variations</p>
    </div>
    
    <div className='products-container'>
      {products?.map((product) => (<Product key={product._id} product={product} />))}
    </div>
     <FooterBanner banner={banners.length>0 && banners[1]}/>
    </>
  )
}

export const getStaticProps = async ()=>{
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const bannersQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannersQuery);
 
  return{
    props:{
      products,
      banners
    }
  }
};

export default Home; 
