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
import type Test from "@/models/Test";
import { BookCheck, Check, MoveLeft } from "lucide-react";
import ButtonCalendar from "../buttons/ButtonCalendar";

type Props = {
  test: Test;
};

const DialogValidRead = ({ test }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Check className="cursor-pointer w-5 hover:scale-105" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Vous avez fini de lire{" "}
            <span className="font-bold">{test.name}</span> ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Date de fin de lecture
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex max-sm:justify-center">
          <ButtonCalendar />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <MoveLeft />
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction className="bg-button hover:bg-gray-900 dark:hover:bg-yellow-500">
            <BookCheck /> Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogValidRead;
