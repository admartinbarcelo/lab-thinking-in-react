import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <>
      <table className="table table-striped table-hover w-50 mx-auto" style={{backgroundColor: '#fff'}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <ProductRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;



