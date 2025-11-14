
'use client';

import React from 'react';
import FileListing from '@/components/FileListing';

export default function FileManagerPage() {
  const mockFiles = [
    { name: 'document.pdf', size: 1024, date: '2023-10-27' },
    { name: 'image.png', size: 2048, date: '2023-10-26' },
  ];

  const mockFolders = [
    { name: 'Photos' },
    { name: 'Documents' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">File Manager</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Folder
        </button>
      </div>
      <FileListing files={mockFiles} folders={mockFolders} />
    </div>
  );
}
