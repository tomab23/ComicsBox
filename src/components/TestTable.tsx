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
import { TestList } from "@/models/TestList";
import VersionBadge from "./VersionBadge";
import type Test from "@/models/Test";

type Props = {
    list: Test[]
}
const TestTable = ({ list } : Props) => {
    // const liste = TestList;

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
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((test) => (
              <TableRow key={test.id} className="odd:bg-muted/50">
                <TableCell className="pl-4">{test.id}</TableCell>
                <TableCell className="font-medium">{test.name}</TableCell>
                <TableCell>{test.page}</TableCell>
                <TableCell><VersionBadge vo={test.vo} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
    </div>
  );
}

export default TestTable