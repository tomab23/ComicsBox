import ButtonBack from "@/components/buttons/ButtonBack";
import Navbar from "@/components/layout/Navbar";
import SelectVersion from "@/components/SelectVersion";
import TestTable from "@/components/TestTable";
import { Button } from "@/components/ui/button";
import { TestList } from "@/models/TestList";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ComicsListPage = () => {
  const navigate = useNavigate();
  const liste = TestList;
  const listeVo = liste.filter((item) => item.vo === true);
  const listeVf = liste.filter((item) => item.vo === false);

  const [versionList, setVersionList] = useState<string>("all");

  const filteredList =
    versionList === "all" ? liste : versionList === "vo" ? listeVo : listeVf;

  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <ButtonBack />
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <h1 className="text-2xl font-bold">
              Vos Comics ({filteredList.length})
            </h1>
            <SelectVersion setVersionList={setVersionList} />
          </div>
          <Button
            className="bg-button dark:hover:bg-yellow-500 hover:bg-gray-900"
            onClick={() => navigate("/comic-form")}
          >
            {" "}
            <Plus />
            Ajouter
          </Button>
        </div>
        <br />
        <TestTable list={filteredList} />
      </div>
    </div>
  );
};

export default ComicsListPage;
