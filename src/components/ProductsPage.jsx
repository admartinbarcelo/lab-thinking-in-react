import { useState } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(data);

  const searchProd = (text) => {
    if (!text) {
      setProducts(data);
    } else {
      const filteredProducts = data.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="w-50 mx-auto">
      <SearchBar searchProducts={searchProd} />
      <h1 className="text-center">IronStore</h1>
      <ProductTable products={products} />
    </div>
  )
}

export default ProductsPage;

