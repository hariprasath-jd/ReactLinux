import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function ImageEdit() {
    const [isLoading, setIsLoading] = useState(true)
    const [resource, SetResource] = useState({})
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => { axios.get('https://localhost:7041/asp-net/Images/LoadImg/' + sessionStorage.getItem('editid')).then((response) => { SetResource(response.data); setIsLoading(false); setName(response.data.filename) }) }, [])
    let nav = useNavigate();

    const handleSubmit = async () => {
        let form = new FormData();
        form.append('filename', name)
        form.append('id', sessionStorage.getItem('editid'))
        await axios.put('https://localhost:7041/asp-net/Images/Update', form).then((response) => { setResult(response);notify(true) }).catch((err) => { console.error(err);notify(false) })
    }

    const notify = (status) => {
        if (status) {
            toast.success('File has been updated', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.error('File has not benn updated please ckeck the internet', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <div>
            {isLoading ? (
                <div className='mt-3 row border rounded-5 p-4' >
                    <div className='col placeholder-glow'>
                        <span className='placeholder w-100' style={{ height: '400px' }}>

                        </span>
                    </div>
                    <div className='col-5 placeholder-glow'>
                        <h3 className='placeholder col-6'></h3>
                        <div></div>
                    </div>

                </div>
            ) : resource !== null ? (
                // Render when data is not empty
                <div className='mt-3 border rounded-5'>
                    <button type='button' className='btn float-none fs-2 ps-4 rounded-5' onClick={() => { nav('/myupload'); sessionStorage.setItem('editid', null) }}><i class="fa-solid fa-circle-arrow-left"></i> Back</button>
                    <div className='row px-4 pb-4' style={{ width: '100%' }}>
                        <div className='col grid text-center'>
                            <div>
                                <img src={`data:image/jpeg;base64,${resource.photos}`} style={{ maxHeight: '400px', objectFit: 'cover' }} alt={resource.filename} />
                            </div>
                        </div>
                        <div className='col-5'>
                            <h3 className='col'>Rename the file name</h3>
                            <div>
                                <form className='form-floating'>
                                    <input type='text' name='filename' value={name} onChange={(val) => { setName(val.target.value) }} className='form-control' />
                                    <label for="filename" className='form-label'>File Name</label>
                                    <button type='button' className='btn btn-warning mt-4' onClick={handleSubmit}>Change</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            ) : (
                // Render when data is empty
                <p>No data available.</p>
            )}
        </div>
    )
}
