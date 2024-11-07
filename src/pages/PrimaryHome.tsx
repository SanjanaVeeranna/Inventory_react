import Header from "../components/Header";
import NewInventory from "../components/inventoryNew/NewInventory";

const PrimaryHome = () => {
  return (
    <div className="flex h-screen">
      <div className="w-14 ml-8">
        <Header />
      </div>
      <div className="w-full bg-white">
        <NewInventory />
      </div>
    </div>
  );
};

export default PrimaryHome;
