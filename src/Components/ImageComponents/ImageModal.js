import React, { useState } from 'react'

export default function ImageModal(props) {
    let [data] = useState(props)
    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="mx-auto modal-dialog-centered" style={{maxWidth:'70vw'}}>
                    <div className="modal-content">
                        <div style={{ height: '600px' }} className='row'>
                            <div className='img-side col'>
                                <img src={`data:image/jpeg;base64,${data.photos}`} alt={data.filename} />
                            </div>
                            <div className='img-details border-start col-5'>
                                <button type="button" className="btn-close p-3 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
