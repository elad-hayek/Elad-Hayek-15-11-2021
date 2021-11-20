import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

const ErrorToast = ({id, error}) =>{
    const [show, setShow] = useState(true)
    return(
        <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide bg="danger">
            <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body  className="text-white">{error}</Toast.Body>
        </Toast>
    )
}

export default ErrorToast