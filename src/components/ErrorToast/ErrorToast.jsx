import React from 'react'
import { Toast } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeFromErrorStack } from '../../actionCreators/homeActions'

const ErrorToast = ({id, name, error}) =>{
    const dispatch = useDispatch()

    return(
        <Toast onClose={()=>{dispatch(removeFromErrorStack(id))}} delay={3000} autohide bg="danger">
            <Toast.Header>
            <strong className="me-auto">{name}</strong>
            </Toast.Header>
            <Toast.Body  className="text-white">{error}</Toast.Body>
        </Toast>
    )
}

export default ErrorToast