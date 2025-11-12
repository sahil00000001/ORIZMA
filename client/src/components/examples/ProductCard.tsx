import ProductCard from '../ProductCard';
const tv43 = '/images/43-inch_TV_product_shot_758a16b4.png';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        name="ORT43 MAX"
        price="₹33,990"
        image={tv43}
        size='109cm (43")'
        resolution="1920 X 1080 FHD"
        tier="MAX"
        features={['wifi', 'voice', 'display', 'audio']}
        onClick={() => console.log('Product clicked')}
      />
    </div>
  );
}
