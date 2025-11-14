
'use client';

import React, { useState } from 'react';

interface DragAndDropUploadProps {
  onUpload: (files: File[]) => void;
  uploadProgress: Record<string, number>;
}

export default function DragAndDropUpload({ onUpload, uploadProgress }: DragAndDropUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length) {
      onUpload(files);
    }
  };

  const isUploading = Object.keys(uploadProgress).length > 0;

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center mb-8 transition-colors ${
        isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isUploading ? (
        <div>
          <p className="text-gray-500">Uploading...</p>
          {Object.entries(uploadProgress).map(([fileName, progress]) => (
            <div key={fileName} className="w-full bg-gray-200 rounded-full h-2.5 my-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-500">{fileName}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Drag and drop files to upload</p>
      )}
    </div>
  );
}
