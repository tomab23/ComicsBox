import CardComicList from "@/components/cards/CardComic";
import Navbar from "@/components/layout/Navbar";
import { Heart } from "lucide-react";

const FavoritePage = () => {
  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <div className="flex items-center gap-2 my-5">
        <p className="text-xl">Vos favoris</p>

        <p className="flex items-center gap-1">
          (10 <Heart className="w-4 h-4 fill-accent-foreground" />)
        </p>
        </div>

        <div className="grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 max-md:grid-cols-2 max-sm:gap-x-2 gap-y-3">
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
          <CardComicList like={true} />
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
