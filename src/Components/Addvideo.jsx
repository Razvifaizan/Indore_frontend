import React, { useState } from 'react';
import axios from 'axios';

const AddVideo = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append('media', file);
    formData.append('caption', caption);
    // formData.append("title", title);

    try {
      const res = await axios.post('http://localhost:4019/gallery/add-gallery', formData);
      alert("Uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-4">
      <h2>Add to Gallery</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AddVideo;
