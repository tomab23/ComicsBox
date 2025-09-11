import CardTrophy from "@/components/cards/CardTrophy";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { MockTrophes } from "@/mocks/MockTrophes";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="setpage">
      <Navbar />

      <div className="contenu">
        <p className="text-center w-full">Profile page</p>
        <p>info user | mail + inscription depuis</p>
        <p>Stats | total comics - total lecture | total VO | total VF</p>
        <p>Graph ? | grah baton avec VO et VF + Graph camamber pourcentage lecture / all </p>
        <p>Trophée ?</p>
        <Button onClick={() => navigate("/trophy")}>Vos Succés</Button>
                <p className="text-center text-xl font-bold mb-5">Vos Succés</p>
        <div className="grid lg:grid-cols-6 grid-cols-4  max-sm:grid-cols-3 xl:grid-cols-7 gap-y-2 xl:gap-y-3 gap-x-1 mb-10">
          {MockTrophes.map((trophy) => (
            <CardTrophy key={trophy.id} trophy={trophy} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default ProfilePage;
