
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

interface UploadedFile {
  original: string;
  thumbnail: string;
  name: string;
  size: number;
  date: string;
}

// Helper function to ensure directories exist
async function ensureDirectoryExists(dirPath: string) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    // Ignore the error if the directory already exists
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('files') as File[];

  if (!files.length) {
    return NextResponse.json({ error: 'No files were uploaded' }, { status: 400 });
  }

  const uploadedFiles: UploadedFile[] = [];
  const uploadsDir = path.join(process.cwd(), 'public/uploads');
  const thumbnailsDir = path.join(process.cwd(), 'public/thumbnails');

  try {
    // Ensure the upload and thumbnail directories exist
    await ensureDirectoryExists(uploadsDir);
    await ensureDirectoryExists(thumbnailsDir);

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const originalFilename = file.name;
      const filename = `${Date.now()}-${originalFilename}`;
      const uploadPath = path.join(uploadsDir, filename);
      const thumbnailPath = path.join(thumbnailsDir, filename);

      await writeFile(uploadPath, buffer);
      await sharp(buffer).resize(200).toFile(thumbnailPath);

      uploadedFiles.push({
        original: `/uploads/${filename}`,
        thumbnail: `/thumbnails/${filename}`,
        name: originalFilename,
        size: file.size,
        date: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      message: 'Files uploaded successfully',
      files: uploadedFiles,
    });
  } catch (error) {
    console.error('Error saving files:', error);
    return NextResponse.json(
      { error: 'An error occurred while saving the files.' },
      { status: 500 }
    );
  }
}
