import Navbar from "@/components/layout/Navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="setpage">
      <Navbar />
      <div className="flex  justify-center gap-5 w-full mt-5">
        <Button onClick={() => navigate("/")}>GO LOGIN</Button>
        <ModeToggle />
        <Button variant={"outline"} onClick={() => navigate("/404")}>
          404
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
