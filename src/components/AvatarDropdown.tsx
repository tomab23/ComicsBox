import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertTriangleIcon, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";

const AvatarDropdown = () => {
    const navigate = useNavigate();
  return (
        <DropdownMenu>
      <DropdownMenuTrigger>
          <Button className="rounded-full bg-button dark:hover:bg-yellow-500 hover:bg-gray-900  size-11 max-sm:size-10">
            <User />
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/profile")}>
          <User className="h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/404")}>
          <AlertTriangleIcon className="h-4 w-4" /> 404
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="text-destructive" onClick={() => navigate("/")}>
          <LogOut className="h-4 w-4 stroke-destructive" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarDropdown