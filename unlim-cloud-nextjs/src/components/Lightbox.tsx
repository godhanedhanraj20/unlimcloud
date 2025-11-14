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

interface LightboxProps {
  file: UploadedFile;
  onClose: () => void;
}

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export default function Lightbox({ file, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-4 right-4 z-10">
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-white text-2xl font-bold">&times;</button>
        </div>
        <div className="flex flex-col md:flex-row max-w-6xl w-full max-h-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <div className="relative flex-grow h-full">
            <Image
              src={file.original}
              alt="Full size image"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="w-full md:w-80 p-4 bg-gray-50 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Details</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Filename:</span> {file.name}
              </p>
              <p>
                <span className="font-semibold">Size:</span> {formatBytes(file.size)}
              </p>
              <p>
                <span className="font-semibold">Uploaded:</span> {new Date(file.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
