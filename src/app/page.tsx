import StoreCard from "./components/StoreCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchClothingStores = async (): Promise<any[]> => {
  const clothingStores = await prisma.clothingStore.findMany();
  return clothingStores;
};

// http://localhost:3000/api/store works on local but fetch failed on build while deploying on vercel

// const fetchClothingStores = async (): Promise<any[]> => {
//   const response = await fetch(process.env.URL + "/api/store");
//   const clothingStores = await response.json();
//   return clothingStores;
// };

export default async function Home() {
  const clothingStores = await fetchClothingStores();

  return (
    <main>
      {/* <Header /> */}
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        {clothingStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </main>
  );
}
