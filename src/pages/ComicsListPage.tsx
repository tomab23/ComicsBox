import Navbar from "@/components/layout/Navbar";
import SelectVersion from "@/components/SelectVersion";

const ComicsListPage = () => {
  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">Vos Comics</h1>
          <SelectVersion />
        </div>
      </div>
    </div>
  );
};

export default ComicsListPage;
