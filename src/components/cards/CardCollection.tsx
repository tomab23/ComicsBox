import { Book } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type Props = {
  border: string
}

const CardCollection = ({ border } : Props) => {
  return (
    <Card className={`${border} w-full shadow-none gap-0 pt-0 hover:cursor-pointer dark:hover:border-yellow-400  hover:border-gray-800`}
    onClick={() => alert("page comics collection")}>
      <CardHeader className="py-4 px-5 font-semibold">
        <p>name (3)</p>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground px-5">
        <div className="flex flex-row items-center gap-2">
          <Book
            className="cursor-pointer w-5 hover:scale-105"
            onClick={() => alert("validation de lecture")}
          />
          <Book
            className="cursor-pointer w-5 hover:scale-105"
            onClick={() => alert("validation de lecture")}
          />
          <Book
            className="cursor-pointer w-5 hover:scale-105"
            onClick={() => alert("validation de lecture")}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardCollection;
