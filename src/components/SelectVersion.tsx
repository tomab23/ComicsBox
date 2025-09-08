import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Version = "all" | "vo" | "vf";

type Props = {
  setVersionList: React.Dispatch<React.SetStateAction<string>>;
}

const SelectVersion = ( { setVersionList } : Props) => {
  return (
      <Select defaultValue="all" onValueChange={(value: Version) => setVersionList(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a version" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Versions</SelectLabel>
            <SelectItem value="all" onClick={() => setVersionList("all")}>Tout</SelectItem>
            <SelectItem value="vo" onClick={() => setVersionList("vo")}>VO</SelectItem>
            <SelectItem value="vf" onClick={() => setVersionList("vf")}>VF</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  );
};

export default SelectVersion;
