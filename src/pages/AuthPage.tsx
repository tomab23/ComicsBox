import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => navigate("/home")}>GO HOME</Button>
    </div>
  );
};

export default AuthPage;
