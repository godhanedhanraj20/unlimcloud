import React from 'react';
import { render, screen } from '@testing-library/react';
import DragAndDropUpload from '../components/DragAndDropUpload';

describe('DragAndDropUpload', () => {
  it('renders without crashing', () => {
    const mockOnUpload = jest.fn();
    const mockUploadProgress = {};

    render(<DragAndDropUpload onUpload={mockOnUpload} uploadProgress={mockUploadProgress} />);
    const dropzoneElement = screen.getByText(/Drag and drop files to upload/i);
    expect(dropzoneElement).toBeInTheDocument();
  });
});
