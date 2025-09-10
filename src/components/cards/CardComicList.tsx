import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
// import type Test from "@/models/Test";
import VersionBadge from "../VersionBadge";
import { Eye, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardComicList = () => {
    const navigate = useNavigate();

  return (
    <Card className="max-w-xs w-60 shadow-none gap-0 pt-0">
      <CardHeader className="py-4 px-5 font-semibold">
        <p>name</p>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground px-5 flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <p>0 pages</p>
          <VersionBadge vo={true} />
        </div>
        <div className="flex gap-2">
          <X
            className="cursor-pointer w-5 hover:scale-105 stroke-destructive"
            onClick={() => alert("supprimer de la collection")}
          />
          <Eye
            className="cursor-pointer w-5 hover:scale-105"
            // onClick={() => navigate(`/comic/${test.id}`)}
          />
        </div>
      </CardContent>

    </Card>
  )
}

export default CardComicList