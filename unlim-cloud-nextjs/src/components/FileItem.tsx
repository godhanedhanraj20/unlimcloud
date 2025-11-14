
'use client';

import React from 'react';

interface FileItemProps {
  name: string;
  size: number;
  date: string;
}

export default function FileItem({ name, size, date }: FileItemProps) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
      <div className="flex items-center space-x-2">
        {/* File icon will go here */}
        <span>{name}</span>
      </div>
      <span>{size}</span>
      <span>{date}</span>
      {/* More actions button will go here */}
    </div>
  );
}
