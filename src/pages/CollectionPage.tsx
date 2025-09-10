import ButtonBack from "@/components/buttons/ButtonBack";
import CardComicCollection from "@/components/cards/CardComicList";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const CollectionPage = () => {
  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <ButtonBack />
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Comics de la collection</h1>
          <Button
            variant={"outline"}
            className=""
            // onClick={() => navigate("/collection-form")}
          >
            {" "}
            {/* <Plus /> */}
            Modifier
          </Button>
        </div>

        {/* COMICS */}
        <div className="mt-5">
          <p className="text-xl">Vos comics</p>
          <div className="mt-5 grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 max-md:grid-cols-2 max-sm:gap-x-2 gap-y-3">
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
            <CardComicCollection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
