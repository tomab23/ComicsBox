import Navbar from "@/components/layout/Navbar";
import VersionBadge from "@/components/VersionBadge";
import Test from "@/models/Test";
import { TestList } from "@/models/TestList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComicsPage = () => {
  const { id } = useParams();

  const [test, setTest] = useState<Test | null>(null);

  useEffect(() => {
    const loadTest = async () => {
      if (id) {
        const finishList = TestList.filter((item) => item.id === Number(id));
        setTest(finishList[0]);
      }
    };
    loadTest();
  }, [id]);

  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <p>Mon comics TEST</p><br />
        <p>Titre : {test?.name} | ID : {test?.id}</p>
        Version : <VersionBadge vo={test?.vo} />
      </div>
    </div>
  );
};

export default ComicsPage;
