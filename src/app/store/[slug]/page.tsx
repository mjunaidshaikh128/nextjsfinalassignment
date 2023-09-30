import { PrismaClient } from "@prisma/client";
import ProductCard from "./components/ProductCard";

const prisma = new PrismaClient();

const fetchProducts = async (name: string): Promise<any[]> => {
  const store = await prisma.clothingStore.findFirst({
    where: {
      slug: name,
    },
  });
  const products = await prisma.product.findMany({
    where: {
      clothingStoreId: store?.id,
    },
  });
  return products;
};
const ClothingStoreProducts = async ({ params }: any) => {
  const products = await fetchProducts(params.slug);

  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ClothingStoreProducts;
