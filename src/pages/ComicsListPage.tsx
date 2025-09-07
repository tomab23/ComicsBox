import Navbar from "@/components/layout/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ComicsListPage = () => {
  return (
    <div className="setpage">
      <Navbar />
      <div className="contenu">
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">Vos Comics</h1>

          <div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select a version" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Versions</SelectLabel>
                  <SelectItem value="all">Tout</SelectItem>
                  <SelectItem value="vo">VO</SelectItem>
                  <SelectItem value="vf">VF</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsListPage;
