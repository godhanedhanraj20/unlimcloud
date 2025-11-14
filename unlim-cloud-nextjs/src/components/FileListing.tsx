
'use client';

import React from 'react';
import FileItem from './FileItem';
import FolderItem from './FolderItem';

interface File {
  name: string;
  size: number;
  date: string;
}

interface Folder {
  name: string;
}

interface FileListingProps {
  files: File[];
  folders: Folder[];
}

export default function FileListing({ files, folders }: FileListingProps) {
  return (
    <div>
      {folders.map((folder, index) => (
        <FolderItem key={index} name={folder.name} />
      ))}
      {files.map((file, index) => (
        <FileItem key={index} name={file.name} size={file.size} date={file.date} />
      ))}
    </div>
  );
}
