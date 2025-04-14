
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
  youtubeShorts: YouTubeShort[];
  isLoading: boolean;
  onEdit: (short: YouTubeShort) => void;
  onDelete: (id: string) => void;
}

const YouTubeShortsTable: React.FC<YouTubeShortsTableProps> = ({ 
  youtubeShorts, 
  isLoading, 
  onEdit, 
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        <p className="mt-2 text-muted-foreground">Loading YouTube shorts...</p>
      </div>
    );
  }

  if (youtubeShorts.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No YouTube shorts found. Add your first short above.</p>
      </div>
    );
  }

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
        {youtubeShorts.map((short) => (
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
