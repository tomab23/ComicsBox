import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VersionBadge from "./VersionBadge";
import type Test from "@/models/Test";
import { Check, Eye, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  list: Test[];
};
const TestTable = ({ list }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>test Name</TableHead>
              <TableHead>page</TableHead>
              <TableHead>version</TableHead>
              <TableHead>Read</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((test) => (
              <TableRow key={test.id} className="odd:bg-muted/50" title={test.name}>
                <TableCell className="pl-4">{test.id}</TableCell>
                <TableCell className="font-medium">{test.name}</TableCell>
                <TableCell>{test.page}</TableCell>
                <TableCell className="w-16">
                  <VersionBadge vo={test.vo} />
                </TableCell>
                <TableCell align="center" className="w-12">
                  {test.finish ? (
                    <Check className="stroke-green-600" />
                  ) : (
                    <X className="stroke-destructive" />
                  )}
                </TableCell>
                <TableCell align="center" className="w-16">
                  <Eye
                    className="w-5 cursor-pointer"
                    onClick={() => navigate(`/comics/${test.id}`)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {list.length > 5 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default TestTable;
