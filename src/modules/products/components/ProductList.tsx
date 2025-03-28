import { DATA } from '@/modules/products/mock/products';
import ProductItem from '@/modules/products/components/ProductItem';

const ProductList = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full my-10">
      {DATA.map((item: any) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
