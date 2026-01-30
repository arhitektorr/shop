import { useEffect, useState } from 'react';
import axios from 'axios';
export type Product = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://masterclass.kimitsu.it-incubator.io/api/products')
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className={'bestseller'}>
      <h2>Bestsellers</h2>
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <p className="price">${product.price}</p>
            <button>Show more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
