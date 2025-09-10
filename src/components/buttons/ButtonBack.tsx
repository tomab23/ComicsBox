import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowLeftIcon } from "lucide-react";

const ButtonBack = () => {
    const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} className="my-2" variant={"ghost"}><ArrowLeftIcon /> Retour</Button>
  )
}

export default ButtonBack