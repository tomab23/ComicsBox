import Navbar from "@/components/layout/Navbar";
import SelectVersion from "@/components/SelectVersion";
import TestTable from "@/components/TestTable";
import { TestList } from "@/models/TestList";
import { useState } from "react";

const ComicsListPage = () => {

  const liste = TestList;
  const listeVo = liste.filter((item) => item.vo === true);
  const listeVf = liste.filter((item) => item.vo === false)

  const [versionList, setVersionList] = useState<string>("all")

  // console.log(versionList);
  


  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">Vos Comics</h1>
          <SelectVersion setVersionList={setVersionList}/>
        </div>
<br />
        <TestTable list={liste} />
      </div>
    </div>
  );
};

export default ComicsListPage;
