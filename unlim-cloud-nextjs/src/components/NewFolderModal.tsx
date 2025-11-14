
'use client';

import React, { useState } from 'react';

interface NewFolderModalProps {
  onClose: () => void;
  onCreate: (folderName: string) => void;
}

export default function NewFolderModal({ onClose, onCreate }: NewFolderModalProps) {
  const [folderName, setFolderName] = useState('');

  const handleCreate = () => {
    if (folderName) {
      onCreate(folderName);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">New Folder</h2>
        <input
          type="text"
          className="border rounded-lg w-full p-2 mb-4"
          placeholder="Folder name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Cancel</button>
          <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
