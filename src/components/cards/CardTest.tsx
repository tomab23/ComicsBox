import {
  Card,
  CardContent,
  //   CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type Test from "@/models/Test";
import VersionBadge from "../VersionBadge";
import { Check, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  test: Test;
};
const CardTest = ({ test }: Props) => {
  const navigate = useNavigate();
  return (
    <Card className="max-w-xs w-60 shadow-none gap-0 pt-0">
      <CardHeader className="py-4 px-5 font-semibold">
        <p>{test.name}</p>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground px-5 flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <p>{test.page} pages</p>
          <VersionBadge vo={test.vo} />
        </div>
        <div className="flex gap-2">
          <Check
            className="cursor-pointer w-5 hover:scale-105"
            onClick={() => alert("validation de lecture")}
          />
          <Eye
            className="cursor-pointer w-5 hover:scale-105"
            onClick={() => navigate(`/comic/${test.id}`)}
          />
        </div>
      </CardContent>
      {/* <CardFooter>
        footer
      </CardFooter> */}
    </Card>
  );
};

export default CardTest;
