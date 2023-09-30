"use client"
import StoreCard from "./components/StoreCard";

const fetchClothingStores = async (): Promise<any[]> => {
  const response = await fetch(process.env.URL + "/api/store");
  const clothingStores = await response.json();
  return clothingStores;
};

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
