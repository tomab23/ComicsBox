import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { HeartOff, MoveLeft, X } from "lucide-react";

type Props = {
  like: boolean;
};

const DialogRemoveComic = ({ like }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {like ? (
          <HeartOff className="cursor-pointer w-5 hover:scale-105 stroke-destructive hover:fill-destructive" />
        ) : (
          <X className="cursor-pointer w-5 hover:scale-105 stroke-destructive" />
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>NAME</AlertDialogTitle>
          <AlertDialogDescription>
            supprimer NAME {like ? " des favoris" : " de la collection"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {" "}
            <MoveLeft />
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction className="bg-destructive">
            {" "}
            {like ? <HeartOff /> : <X />}Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogRemoveComic;
