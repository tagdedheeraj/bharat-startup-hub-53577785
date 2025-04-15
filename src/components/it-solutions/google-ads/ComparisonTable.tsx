
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type ComparisonFeature } from "./types";

export const ComparisonTable = ({ features }: { features: ComparisonFeature[] }) => {
  return (
    <div className="w-full overflow-auto rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[200px]">Feature</TableHead>
            <TableHead>Starter</TableHead>
            <TableHead>Standard</TableHead>
            <TableHead>Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feature.feature}</TableCell>
              <TableCell>
                {typeof feature.starter === "boolean" ? (
                  feature.starter ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    "—"
                  )
                ) : (
                  feature.starter
                )}
              </TableCell>
              <TableCell>
                {typeof feature.standard === "boolean" ? (
                  feature.standard ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    "—"
                  )
                ) : (
                  feature.standard
                )}
              </TableCell>
              <TableCell>
                {typeof feature.premium === "boolean" ? (
                  feature.premium ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    "—"
                  )
                ) : (
                  feature.premium
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
