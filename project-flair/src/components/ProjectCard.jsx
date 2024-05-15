import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { SERVER_URL } from '../services/serverUrl';




function ProjectCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn' style={{ width: '28rem' }}>
        <Card.Img height={"200px"} variant='top' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt="" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h5><span className='fw-bolder'> Language Used  </span> : {displayData?.language}</h5>
              <p style={{textAlign:'justify'}}>{displayData?.overview}</p>
            </div>
          </div>
          <hr />
          <div className="float-start mt-2">
          <a href={displayData?.github} target='_blank' className='btn btn-secondary' onClick={handleClose}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={displayData?.website} target='_blank' className='btn btn-secondary ms-2'  onClick={handleClose}>
          <i className="fa-solid fa-link"></i> 
          </a>

          </div>

        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ProjectCard