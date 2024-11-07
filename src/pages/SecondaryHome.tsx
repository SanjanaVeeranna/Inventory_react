import ViewInventory from "../components/inventoryView/ViewInventory";
import Header from "../components/Header";

const SecondaryHome = () => {
  return (
    <div className="flex h-screen">
      <div className="w-14 ml-8">
        <Header />
      </div>
      <div className="w-full bg-white">
        <ViewInventory />
      </div>
    </div>
  );
};

export default SecondaryHome;
