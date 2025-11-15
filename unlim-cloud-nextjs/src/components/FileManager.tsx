
'use client';

import { useState, useEffect } from 'react';
import { FaFile, FaFolder, FaUpload } from 'react-icons/fa';

// Define the shape of a file or folder
interface FileSystemItem {
  name: string;
  type: 'file' | 'folder';
  path: string;
  size?: number; // Optional for files
  createdAt?: Date; // Optional
}

const FileManager = () => {
  const [items, setItems] = useState<FileSystemItem[]>([]);
  const currentPath = '/';
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);

  const fetchItems = async () => {
    setLoading(true);
    // In a real app, you would fetch this from your backend.
    // Here we are just mocking the data.
    setTimeout(() => {
      const mockItems: FileSystemItem[] = [
        { name: 'Documents', type: 'folder', path: '/Documents' },
        { name: 'Images', type: 'folder', path: '/Images' },
        { name: 'report.pdf', type: 'file', path: '/report.pdf', size: 1024 * 1024 * 2 },
        { name: 'vacation.jpg', type: 'file', path: '/vacation.jpg', size: 1024 * 1024 * 5 },
      ];
      setItems(mockItems);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setUploading(true);

    const formData = new FormData();
    for (const file of files) {
      formData.append('files[]', file);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Files uploaded successfully:', data.data);
        fetchItems(); // Refresh the file list
      } else {
        console.error('File upload failed:', data.error);
      }
    } catch (error) {
      console.error('An error occurred during file upload:', error);
    }

    setUploading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">File Manager</h1>
        <div>
          <label htmlFor="file-upload" className={`cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center ${uploading ? 'opacity-50' : ''}`}>
            <FaUpload className="mr-2" />
            <span>{uploading ? 'Uploading...' : 'Upload'}</span>
          </label>
          <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileUpload} disabled={uploading} />
        </div>
      </div>

      {/* Breadcrumbs for navigation */}
      <div className="mb-4">Current Path: {currentPath}</div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.path} className="border rounded-lg p-4 flex flex-col items-center justify-center">
              {item.type === 'folder' ? <FaFolder className="text-5xl text-yellow-500 mb-2" /> : <FaFile className="text-5xl text-gray-500 mb-2" />}
              <p className="font-semibold text-center">{item.name}</p>
              {item.size && <p className="text-sm text-gray-500">{Math.round(item.size / (1024 * 1024))} MB</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileManager;
