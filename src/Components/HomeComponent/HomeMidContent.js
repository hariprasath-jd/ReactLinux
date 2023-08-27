import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Styles/HomePage/HomeMidContent.css'
import ImageModal from '../ImageComponents/ImageModal';

export default function HomeMidContent() {

    let [Data, setData] = useState([])
    let [err] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://localhost:7041/asp-net/Images/LoadAll').then((i) => { setData(i.data); setIsLoading(false) }).catch((error) => { err = error.data; setIsLoading(false) })
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className='main-div'>
                    <div className="scene">
                        <div className="cube-wrapper">
                            <div className="cube">
                                <div className="cube-faces">
                                    <div className="cube-face shadow"></div>
                                    <div className="cube-face bottom"></div>
                                    <div className="cube-face top"></div>
                                    <div className="cube-face left"></div>
                                    <div className="cube-face right"></div>
                                    <div className="cube-face back"></div>
                                    <div className="cube-face front"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : Data.length > 0 ? (
                // Render when data is not empty
                <div className='image-box-card' >
                    {Data.map((img, index) => (
                        <div key={index} className='box'>
                            <div key={index} className='file-name' data-bs-toggle="modal" data-bs-target="#staticBackdrop">{img.filename}
                                <div className='btn btn-danger rounded-5 p-btn'><i class="fa-regular fa-floppy-disk" style={{ color: '#fff', fontSize: '28px' }}></i></div>
                            </div>
                            <img src={`data:image/jpeg;base64,${img.photos}`} alt={img.filename}  ></img>
                        </div>
                    ))}
                </div>
            ) : (
                // Render when data is empty
                <p>No data available.</p>
            )}
            <div>{err}</div>

        </div>
    )
}
