import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-3 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        {/* SEARCH */}
        <div className="flex items-center gap-2 md:gap-6">
          <h1
            className="shrink-0 font-semibold text-xl max-sm:text-sm cursor-pointer"
            onClick={() => navigate("/home")}
          >
            ComicsBox
          </h1>
          <div className="relative ">
            <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
            <Input
              className="pl-10 flex-1 bg-slate-100/70 dark:bg-slate-800 border-none shadow-none w-[280px] max-sm:w-36 rounded-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button className="rounded-full dark:bg-yellow-400 bg-gray-800 dark:hover:bg-yellow-500 hover:bg-gray-900 size-11 max-sm:size-10" onClick={() => navigate("/profile")}>
            <User />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
