
'use client';

import React from 'react';
import Image from 'next/image';

interface UploadedFile {
  original: string;
  thumbnail: string;
  name: string;
  size: number;
  date: string;
}

interface GalleryGridProps {
  files: UploadedFile[];
  onImageClick: (file: UploadedFile) => void;
  isLoading: boolean;
}

export default function GalleryGrid({ files, onImageClick, isLoading }: GalleryGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="aspect-square rounded-lg bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {files.map((file) => (
        <div
          key={file.name}
          className="aspect-square rounded-lg overflow-hidden cursor-pointer"
          onClick={() => onImageClick(file)}
        >
          <Image
            src={file.thumbnail}
            alt={file.name}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
