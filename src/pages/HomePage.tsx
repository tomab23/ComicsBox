import Navbar from "@/components/layout/Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="setpage">
      <Navbar />
    </div>
  );
};

export default HomePage;
