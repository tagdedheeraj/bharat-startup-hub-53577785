
import { Check, Minus } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { type ComparisonFeature } from "./types";

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
            <TableHead>Weekly</TableHead>
            <TableHead>Bi-Weekly</TableHead>
            <TableHead>Monthly</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <TableCell className="font-medium">{item.feature}</TableCell>
              <TableCell>
                {typeof item.weekly === 'boolean' ? (
                  item.weekly ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.weekly
                )}
              </TableCell>
              <TableCell>
                {typeof item.biWeekly === 'boolean' ? (
                  item.biWeekly ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.biWeekly
                )}
              </TableCell>
              <TableCell>
                {typeof item.monthly === 'boolean' ? (
                  item.monthly ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Minus className="w-5 h-5 text-gray-400" />
                  )
                ) : (
                  item.monthly
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
