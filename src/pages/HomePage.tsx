import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="setpage">
      <Navbar />

      <div className="contenu">
      <p className="text-center">stats ? ex : nombre de comics / comics vo / comics vf / pourcentage de lecture sur tout les comics</p>

      <div className="flex justify-between items-center mt-5">
        <h1 className="text-2xl font-bold">Vos dernières lectures</h1>
        <Button className="bg-button dark:hover:bg-yellow-500 hover:bg-gray-900" onClick={() => navigate("/comics-form")}> <Plus />Ajouter</Button>
      </div>

      <div className="flex flex-col gap-20 mt-20">
        <p>Lecture en cours</p>

        <p>double Tableau lectures : VO | VF</p>
      </div>
      </div>


    </div>
  );
};

export default HomePage;
