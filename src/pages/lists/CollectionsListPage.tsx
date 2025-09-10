import ButtonBack from "@/components/buttons/ButtonBack";
import CardCollection from "@/components/cards/CardCollection";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollectionsListPage = () => {
    const navigate = useNavigate();

  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <ButtonBack />
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vos collections (3)</h1>
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
        <div className="mt-10 flex flex-col gap-5">
          <CardCollection border={""} />
          <CardCollection border={""} />
          <CardCollection border={""} />
        </div>
      </div>
    </div>
  );
};

export default CollectionsListPage;
