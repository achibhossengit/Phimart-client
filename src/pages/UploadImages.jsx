import React, { useState } from 'react';

const UploadImages = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    
    // Create preview URLs
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    // In a real app, you would upload files to your server here
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    clearInterval(interval);
    setIsUploading(false);
    setUploadProgress(0);
    alert('Images uploaded successfully!');
    setSelectedFiles([]);
    setPreviewUrls([]);
  };

  const removeImage = (index) => {
    const newFiles = [...selectedFiles];
    const newPreviews = [...previewUrls];
    
    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);
    
    setSelectedFiles(newFiles);
    setPreviewUrls(newPreviews);
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Upload Images</h3>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select images (multiple allowed)
        </label>
        <div className="flex items-center">
          <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-md border border-blue-200 transition-colors">
            Choose Files
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <span className="ml-3 text-sm text-gray-500">
            {selectedFiles.length > 0 
              ? `${selectedFiles.length} file(s) selected` 
              : 'No files chosen'}
          </span>
        </div>
      </div>

      {previewUrls.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
          <div className="grid grid-cols-3 gap-3">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img 
                  src={url} 
                  alt={`Preview ${index}`} 
                  className="h-24 w-full object-cover rounded-md border"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={selectedFiles.length === 0 || isUploading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          selectedFiles.length === 0 
            ? 'bg-gray-400 cursor-not-allowed' 
            : isUploading 
              ? 'bg-blue-400' 
              : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload Images'}
      </button>

      {isUploading && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default UploadImages;