
import { Check, Minus } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { ComparisonFeature } from "./types";

interface ComparisonTableProps {
  features: ComparisonFeature[];
}

export const ComparisonTable = ({ features }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-1/4">Features</TableHead>
            <TableHead>BoostStarter</TableHead>
            <TableHead>RankRise</TableHead>
            <TableHead>DominanceMax</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <TableCell className="font-medium">{item.feature}</TableCell>
              <TableCell>
                {typeof item.boostStarter === 'boolean' ? (
                  item.boostStarter ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.boostStarter
                )}
              </TableCell>
              <TableCell>
                {typeof item.rankRise === 'boolean' ? (
                  item.rankRise ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.rankRise
                )}
              </TableCell>
              <TableCell>
                {typeof item.dominanceMax === 'boolean' ? (
                  item.dominanceMax ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.dominanceMax
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
