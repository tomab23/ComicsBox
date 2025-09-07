import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectVersion = () => {
  return (
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
  );
};

export default SelectVersion;
