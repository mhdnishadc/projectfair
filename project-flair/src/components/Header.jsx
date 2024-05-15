import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



function Header(insideDashboard) {
  const navigate = useNavigate()

  const logout =()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <Navbar style={{ zIndex: "1" }} className='card shadow top-0 position-fixed w-100'>
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: 'none' }} className='fw-bolder' to={'/'} >
            <i className="fa-brands fa-docker"></i> ProjectFlair
          </Link>
        </Navbar.Brand>
        { insideDashboard &&
          <div className="ms-auto">
            <button onClick={logout} className='btn btn-link'>Logout <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
        }
      </Container>
    </Navbar>
  )
}

export default Header