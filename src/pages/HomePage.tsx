import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-svh gap-5 items-center justify-center">
      <Button onClick={() => navigate("/")}>GO LOGIN</Button>
      <ModeToggle />
      <Button variant={"outline"} onClick={() => navigate("/404")}>404</Button>
    </div>
  );
};

export default HomePage;
