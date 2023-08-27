import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/HomePage/HomeMidContent.css'
import { useNavigate } from 'react-router-dom';

export default function HomeUserSpecificContent() {
    let [Data, setData] = useState([])
    let [IsLoading, setIsLoading] = useState(true)
    let nav = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:7041/asp-net/Images/Load/' + sessionStorage.getItem('id')).then((i) => { setData(i.data); setIsLoading(false) }).catch((error) => {console.error(error.data); setIsLoading(false) })
    }, []);
    const Editbtn = (val) => {
        sessionStorage.setItem('editid',val)
        nav('/edit')
    }

    return (
        <div>
            {IsLoading ? (
                <div className='main-div' style={{height:'100svh'}}>
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
                <div className='mx-5 mt-5 pt-2  border  overflow-hidden'>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col-1">id</th>
                                <th scope="col">File Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((data, index) => (
                                <tr className=''>
                                    <th scope='row'>{index + 1}</th>
                                    <td className='col-5 mx-auto'>{data.filename}</td>
                                    <td className='col-2'><img src={`data:image/jpeg;base64,${data.photos}`} style={{ maxHeight: '250px' }} width={'200px'} alt={data.filename}  ></img></td>
                                    <td className='col-2'>
                                        <button className='btn btn-warning me-3' onClick={() => { Editbtn(data.id) }}>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Render when data is empty
                <div className='h-100'>
                    <table class="table table-striped table-dark p-5 justify-content-center">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">File Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>

                    </table>
                    <h3 className='mx-auto'>No Images Uploaded</h3>
                </div>
            )}

        </div>
    )
}
