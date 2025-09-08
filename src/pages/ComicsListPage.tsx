import Navbar from "@/components/layout/Navbar";
import SelectVersion from "@/components/SelectVersion";
import TestTable from "@/components/TestTable";
import { TestList } from "@/models/TestList";
import { useState } from "react";

type Version = "all" | "vo" | "vf";

const ComicsListPage = () => {
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
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">Vos Comics</h1>
          <SelectVersion setVersionList={setVersionList} />
        </div>
        <br />
        <TestTable list={filteredList} />
      </div>
    </div>
  );
};

export default ComicsListPage;
