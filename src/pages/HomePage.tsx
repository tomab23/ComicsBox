import Navbar from "@/components/layout/Navbar";
import TestTable from "@/components/TestTable";
import { Button } from "@/components/ui/button";
import { TestList } from "@/models/TestList";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const liste = TestList;

const finishList = liste.filter(item => item.finish === true);
  
  return (
    <div className="setpage">
      <Navbar />
      {/* STATS */}
      <div className="contenu">
        <p className="text-center">
          stats ? ex : nombre de comics / comics vo / comics vf / pourcentage de
          lecture sur tout les comics
        </p>
        {/* TITLE & ADD BUTTON */}
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">Vos dernières lectures</h1>
          <Button
            className="bg-button dark:hover:bg-yellow-500 hover:bg-gray-900"
            onClick={() => navigate("/comics-form")}
          >
            {" "}
            <Plus />
            Ajouter
          </Button>
        </div>

        {/* READING */}
        <div className="flex flex-col gap-20 mt-20">
          <div>
            <p>Lecture en cours</p>
            <br />
            <p className="italic">Petite carte en carroussel ?</p>
          </div>
          {/* LAST READ */}
          <p>double Tableau lectures ? : VO | VF</p>
          <TestTable list={finishList} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
