import React from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function MyVerticallyCenteredModal(props) {

    const navigate = useNavigate()

    const afterConfirmed = () => {
        navigate('/')
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>Payment Confirmation</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="d-flex justify-content-center ">Your payment has been <h5 className="text-success">&nbsp; Accepted!</h5></h5>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="-23 0 70 24" stroke="#48c76a" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => (props.onHide(), afterConfirmed()) }>Ok</Button>
            </Modal.Footer>
        </Modal>
    );
}

const EmailPayment = ({modalShow, setModalShow}) => {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default EmailPayment;

