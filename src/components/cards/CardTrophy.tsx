import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type Trophy from "@/mocks/Trophy";
import {
  Book,
  Check,
  TrophyIcon,
} from "lucide-react";
import { Progress } from "../ui/progress";

type Props = {
  trophy: Trophy;
};
const CardTrophy = ({ trophy }: Props) => {

  const bookHave = 10;

  const getRarityVariant = (rarity: string) => {
    switch (rarity) {
      case "bronze":
        return "stroke-[#CD7F32]";
      case "silver":
        return "stroke-[#C0C0C0]";
      case "gold":
        return "stroke-[#FFD700]";
      case "platinum":
        return "stroke-[#E5E4E2]";
      default:
        return "";
    }
  };
  
  const getProgressColor = (rarity: string) => {
  switch (rarity) {
    case 'bronze':
      return '[&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-amber-700';
    case 'silver':
      return '[&>div]:bg-gradient-to-r [&>div]:from-slate-400 [&>div]:to-slate-600';
    case 'gold':
      return '[&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-yellow-600';
    case 'platinum':
      return '[&>div]:bg-gradient-to-r [&>div]:from-indigo-400 [&>div]:to-indigo-600';
    default:
      return '';
  }
};

  const progress = (10 / trophy.need) * 100;

  return (
    <Card className="max-w-48 pb-3">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <TrophyIcon
            className={`w-12 h-12 ${getRarityVariant(trophy.rarity)}`}
          />
        </CardTitle>
        <CardDescription className="flex flex-col items-center justify-center mt-1 gap-2">
          <p className="text-md font-bold text-center first-letter:uppercase">{trophy.name}</p>
          <p className="text-xs flex gap-1">
            {trophy.need} Comics
            {bookHave >= trophy.need && <Check className="w-4 h-4 stroke-green-700 dark:stroke-green-400" />}
          </p>
          <div className="flex items-center gap-2">
              <Book className="w-4 h-4" />
            <p className="text-xs">{bookHave >= trophy.need ? trophy.need : bookHave} / {trophy.need}</p>
          </div>
          <Progress value={progress} 
          className={`h-2 opacity-50 mt-1 ${getProgressColor(trophy.rarity)}`} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardTrophy;
