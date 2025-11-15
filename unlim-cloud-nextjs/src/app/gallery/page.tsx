
'use client';

import React, { useState } from 'react';
import DragAndDropUpload from '@/components/DragAndDropUpload';
import GalleryGrid from '@/components/GalleryGrid';
import Lightbox from '@/components/Lightbox';

interface UploadedFile {
  original: string;
  thumbnail: string;
  name: string;
  size: number;
  date: string;
}

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedImage, setSelectedImage] = useState<UploadedFile | null>(null);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  const handleUpload = async (files: File[]) => {
    setIsLoading(true);
    setMessage('');
    const newProgress: Record<string, number> = {};
    files.forEach(file => {
      newProgress[file.name] = 0;
    });
    setUploadProgress(newProgress);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files[]', file);
    });

    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/upload', true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          const newProgress: Record<string, number> = {};
          files.forEach(file => {
            newProgress[file.name] = progress;
          });
          setUploadProgress(newProgress);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setMessage(data.message || 'Files uploaded successfully!');
          const newFiles = data.data.map((fileUrl: string, index: number) => ({
            original: fileUrl,
            thumbnail: fileUrl, // Using the same URL for thumbnail
            name: files[index].name,
            size: files[index].size,
            date: new Date().toISOString(),
          }));
          setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
        } else {
          const data = JSON.parse(xhr.responseText);
          setMessage(data.error || 'An error occurred during upload.');
        }
        setIsLoading(false);
        setUploadProgress({});
      };

      xhr.onerror = () => {
        console.error('Upload error:', xhr.statusText);
        setMessage('An error occurred during upload.');
        setIsLoading(false);
        setUploadProgress({});
      };

      xhr.send(formData);
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('An error occurred during upload.');
      setIsLoading(false);
      setUploadProgress({});
    }
  };

  const handleImageClick = (file: UploadedFile) => {
    setSelectedImage(file);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload
        </button>
      </div>

      <DragAndDropUpload onUpload={handleUpload} uploadProgress={uploadProgress} />

      {message && <p className="mb-4 text-center text-sm text-gray-600">{message}</p>}

      <GalleryGrid files={uploadedFiles} onImageClick={handleImageClick} isLoading={isLoading} />

      {selectedImage && <Lightbox file={selectedImage} onClose={handleCloseLightbox} />}
    </div>
  );
}
