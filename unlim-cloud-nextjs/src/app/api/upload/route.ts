
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const files: File[] = data.getAll('files[]') as File[];

  if (!files || files.length === 0) {
    return NextResponse.json({ success: false, error: 'No files were provided.' });
  }

  const uploadedFileUrls: string[] = [];
  const uploadDir = join(process.cwd(), 'public', 'uploads');

  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error: any) {
    if (error.code !== 'EEXIST') {
      console.error('Error creating directory:', error);
      return NextResponse.json({ success: false, error: 'Could not create upload directory.' });
    }
  }

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file to the `public/uploads` directory
    const filePath = join(uploadDir, file.name);
    await writeFile(filePath, buffer);

    // Create a URL to access the file
    const fileUrl = `/uploads/${file.name}`;
    uploadedFileUrls.push(fileUrl);
  }

  return NextResponse.json({
    success: true,
    message: 'Files uploaded successfully',
    data: uploadedFileUrls,
  });
}
