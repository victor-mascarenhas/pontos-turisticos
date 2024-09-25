import useLocations from "@/hooks/useLocations";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataTableProps } from "./types";

const DataTable = ({ locations }: DataTableProps) => {
  const { onChangeSelectedLoc } = useLocations();

  return (
    <div className="border rounded overflow-y-auto">
      <Table>
        <TableHeader>
          <TableHead>Nome</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Bairro</TableHead>
          <TableHead>Tombamento</TableHead>
        </TableHeader>
        <TableBody>
          {locations.map((location, i) => {
            return (
              <TableRow
                key={i}
                className="cursor-pointer"
                onClick={() => onChangeSelectedLoc(location)}
              >
                <TableCell>{location.txAtrativo}</TableCell>
                <TableCell>{location.txTipo}</TableCell>
                <TableCell>{location.txBairro}</TableCell>
                <TableCell>{location.txTombamento}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
