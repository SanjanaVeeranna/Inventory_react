import Header from "../components/Header";
import Profile from "../components/inventory/Profile";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="w-14 ml-8">
        <Header />
      </div>
      <div className="w-full bg-white">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
