import { Book } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  // CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";

type Props = {
  border: string
}

const CardCollection = ({ border } : Props) => {
  return (
    <Card className={`${border} w-full shadow-none gap-0 pt-0 hover:cursor-pointer dark:hover:border-yellow-400  hover:border-gray-800`}
    onClick={() => alert("page comics collection")}>
      <CardHeader className="py-4 px-5 font-semibold">
        <p>name (3)</p>
        {/* <CardAction className="hover:cursor-pointer hover:scale-110 text-xl -mt-1"
        >
          <Button onClick={() => alert("actions")} variant={"ghost"}>...</Button>
        </CardAction> */}
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
