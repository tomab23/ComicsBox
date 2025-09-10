import ButtonBack from "@/components/buttons/ButtonBack"
import Navbar from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { Book } from "lucide-react"

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
      </div>
    </div>
  )
}

export default CollectionPage