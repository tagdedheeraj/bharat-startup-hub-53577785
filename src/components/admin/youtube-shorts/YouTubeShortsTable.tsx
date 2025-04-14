
import React from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

interface YouTubeShortsTableProps {
  shorts: YouTubeShort[];
  onEdit: (short: YouTubeShort) => void;
  onDelete: (id: string) => void;
}

const YouTubeShortsTable: React.FC<YouTubeShortsTableProps> = ({ 
  shorts, 
  onEdit, 
  onDelete 
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Preview</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>YouTube ID</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shorts.map((short) => (
          <TableRow key={short.id}>
            <TableCell>
              <img 
                src={short.thumbnail} 
                alt={short.title} 
                className="w-32 h-18 object-cover rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/320x180/gray/white?text=Thumbnail+Error";
                }}
              />
            </TableCell>
            <TableCell className="font-medium">{short.title}</TableCell>
            <TableCell>{short.id}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onEdit(short)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => onDelete(short.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default YouTubeShortsTable;
