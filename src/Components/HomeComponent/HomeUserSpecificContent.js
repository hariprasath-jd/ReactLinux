import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/HomePage/HomeMidContent.css'
import { useNavigate } from 'react-router-dom';

export default function HomeUserSpecificContent() {

    const value1 = <button type="button" class="btn btn-danger" onClick={() => { confirmDelete() }}>Delete</button>;
    const icon = '--fa-primary-color: #0d0d0d; --fa-secondary-color: #e00000; --fa-secondary-opacity: 0.6;'
    let [Data, setData] = useState([])
    let [IsLoading, setIsLoading] = useState(true)
    let [IsDeleted, setDeleted] = useState()
    let [btn, setbtn] = useState(value1)
    let [name, setName] = useState('');
    let nav = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:7041/asp-net/Images/Load/' + sessionStorage.getItem('id')).then((i) => { setData(i.data); setIsLoading(false) }).catch((error) => { console.error(error.data); setIsLoading(false) })
    }, []);
    const Editbtn = (val) => {
        sessionStorage.setItem('editid', val)
        nav('/edit')
    }

    const deleteBtn = (id, name) => {
        setbtn(value1)
        sessionStorage.setItem('delid', id)
        setName(name);
    }

    const confirmDelete = async () => {
        setbtn(<button class="btn btn-danger" type="button" disabled>
            <span class="spinner-border spinner-border-sm text-emphasis-light" aria-hidden="true"></span>
            <span  role="status">Deleting...</span>
        </button>)
        await axios.delete('https://localhost:7041/asp-net/Images/Delete/' + sessionStorage.getItem('delid')).then((response) => { (response.status === 200) ? IsDeleted = true : IsDeleted = false }).catch((err) => { console.error(err) });
        if(IsDeleted){
            setbtn(<button type='button' className='btn btn-success'><i class="fa-solid fa-check" style={{color:'#ffffff'}}></i> Done</button>)
        }
        else{
            setbtn(<button type='button' className='btn btn-warning'><i class="fa-duotone fa-triangle-exclamation" style={{"--fa-primary-color": "#0d0d0d", "--fa-secondary-color": '#e00000', '--fa-secondary-opacity': '0.6'}}></i> Error</button>)
        }
    }

    return (
        <div>
            {IsLoading ? (
                <div className='main-div' style={{ height: '100svh' }}>
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
                <div className='mx-5 mt-5 pt-2  border rounded-3  overflow-hidden overflow-y-scroll' style={{maxHeight:'700px'}}>
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
                                    <td className='col-2'><img src={`data:image/jpeg;base64,${data.photos}`} style={{ maxHeight: '250px',aspectRatio:'auto',objectFit:'contain' }} width={'200px'} alt={data.filename}  ></img></td>
                                    <td className='col-2'>
                                        <button className='btn btn-warning me-3' onClick={() => { Editbtn(data.id) }}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => { deleteBtn(data.id, data.filename) }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Conformation</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you Sure? Do you want to delete the Image '{name}'
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {btn}
                                </div>
                            </div>
                        </div>
                    </div>
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
