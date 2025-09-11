import ButtonBack from "@/components/buttons/ButtonBack";
import CardTrophy from "@/components/cards/CardTrophy";
import Navbar from "@/components/layout/Navbar";
import { MockTrophes } from "@/mocks/MockTrophes";

const TrophyPage = () => {
  return (
    <div className="setpage">
        <Navbar />
      <div className="contenu">
        <ButtonBack />
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

export default TrophyPage;
