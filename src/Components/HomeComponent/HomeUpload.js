import React, { useRef, useState } from 'react'
import uploadicon from '../../Images/upload.png'
import '../../Styles/HomePage/HomeUpload.css'
import axios from 'axios'

export default function HomeUpload() {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setuploadedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  }


  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const filename = file.name.filename > 12 ? `${file.name.substring(0, 13)}... .${file.name.sllit('.')[1]}` : file.name;
    const formData = new FormData();
    formData.append('file', file);
    setFiles(prevState => [...prevState, { name: filename, loading: 0 }]);
    setShowProgress(true)
    axios.post('https://localhost:7041/asp-net/Images/Create', formData, {
      onUploadProgress: ({ loaded, total }) => {
        setFiles(prevState => {
          const newFiles = [...prevState];
          newFiles[newFiles.length - 1].loading = Math.floor((loaded / total) * 100);
          return newFiles;
        });
        if (loaded === total) {
          const fileSize = total < 1024 ? `${total} KB` : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
          setuploadedFiles([...uploadedFiles, { name: filename, size: fileSize }])
          setFiles([]);
          setShowProgress(false);
        }
      },
    }).catch(console.error)
  }

  return (
    <div className='mt-5 p-5'>
      <div className='upload-box mt-5 rounded-4 row'>
        <div className='col'>
          <p>Upload your Image</p>
          <form onClick={handleFileInputClick}>
            <input className='file-input' type='file' name='file' ref={fileInputRef} onChange={(e) => { uploadFile(e) }} hidden />
            <div className='icon'>
              <img src={uploadicon} alt='load icon' className='me-3' />
            </div>
            <p>Browse files to upload</p>
          </form>
        </div>
        <div className='col-3 mt-4'>
          {showProgress && (
            <section className='loading-area'>
              {files.map((file, index) => (
                <li className='row-up' key={index}>
                  <i className='fas fa-file-alt'></i>
                  <div className='content'>
                    <div className='details'>
                      <span className='name'>{`${file.name} - uploading`}</span>
                      <span className='percent'>{`${file.loading}%`}</span>
                      <div className='loading-bar'>
                        <div className='loading' style={{ width: `${file.loading}%` }}></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </section>
          )}
          <section className='uploaded-area'>
            {uploadedFiles.map((file, index) => (
              <li className='row-up' key={index}>
                <div className='content upload'>
                  <i className='fas fa-file-alt'></i>
                  <div className='details'>
                    <span className='name'>{file.name}</span>
                    <span className='size'>{file.size}</span>
                  </div>
                </div>
                <i className='fas fa-check' ></i>
              </li>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
