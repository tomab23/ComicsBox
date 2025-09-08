import { Badge } from "./ui/badge";

type Props = {
  vo: boolean;
};
const VersionBadge = ({ vo }: Props) => {
  return (
    <div>
      {vo ? (
        <Badge className="bg-blue-600/10 dark:bg-blue-600/20 hover:bg-blue-600/10 text-blue-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" /> VO
        </Badge>
      ) : (
        <Badge className="bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" /> VF
        </Badge>
      )}
    </div>
  );
};

export default VersionBadge;
