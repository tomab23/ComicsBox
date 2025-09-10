import ButtonBack from "@/components/buttons/ButtonBack";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollectionsPage = () => {
    const navigate = useNavigate();

  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <ButtonBack />
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vos collections (0)</h1>
          <Button
            className="bg-button dark:hover:bg-yellow-500 hover:bg-gray-900"
            onClick={() => navigate("/collection-form")}
          >
            {" "}
            <Plus />
            Ajouter
          </Button>
        </div>
        {/* LIST */}
        <div className="mt-10">
          <p>liste de collection</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
