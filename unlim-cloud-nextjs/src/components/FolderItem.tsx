
'use client';

import React from 'react';

interface FolderItemProps {
  name: string;
}

export default function FolderItem({ name }: FolderItemProps) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
      <div className="flex items-center space-x-2">
        {/* Folder icon will go here */}
        <span>{name}</span>
      </div>
      {/* More actions button will go here */}
    </div>
  );
}
