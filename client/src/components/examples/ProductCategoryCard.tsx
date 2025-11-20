import ProductCategoryCard from '../ProductCategoryCard';
const tv32 = '/images/32-inch_TV_product_shot_6cb4aeaf.webp';

export default function ProductCategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCategoryCard
        size='32"'
        images={[tv32]}
        modelCount={4}
        priceRange="₹15,999"
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
