import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container w-100 mt-5' style={{ height: '300px' }}>
    <div className='footer-content d-flex justify-content-between'>
        <div className="media" style={{ width: "400px" }}>
           
            <p style={{ textAlign: 'justify',fontSize:'12px' }}>  <h1 style={{ fontSize: "30px" }}> <i class="fa-brands fa-docker"></i> Project Flair</h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti tempora ducimus quaerat quod natus porro sint laborum dolore,</p>
            <span style={{fontSize:'12px',marginTop:'10px'}}>Code Licensed MIT,docs cc by 3.0</span><br />
            <span style={{fontSize:'12px'}}>Currently v5.3.2</span>
        </div>
        <div style={{fontSize:'12px'}} className="links d-flex flex-column ">
            <h6 className='d-flex'>Links</h6>
            <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>Wishlist</Link>
            <Link to={'/cart'} style={{ textDecoration: 'none' }}>Cart</Link>


        </div>
        <div style={{fontSize:'12px'}} className="guides d-flex flex-column">
            <h6>Guides</h6>
            <a href="https://www.amazon.in/" target='_blank' style={{ textDecoration: 'none' }}><i class="fa-brands fa-amazon"></i> Amazon</a>
            <a href="https://about.meta.com/company-info/" target='_blank' style={{ textDecoration: 'none' }}><i class="fa-brands fa-meta"></i> Meta</a>
           
        </div>
        <div style={{fontSize:'12px'}} className="contact">
            <h6>Contact Us</h6>
            <div className='d-flex'>
                <input style={{ width: '300px', height: '40px', border: '2px solid #64943e', borderRadius: '20px', padding: '10px' }} type="text" className='form-control me-1' placeholder='Email Id' />
                <button style={{ background: '#64943e', width:'40px', borderRadius:'50%' }}><i style={{ color: 'white', fontSize: '10px', fontStyle:'bold' }} class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <h6 className='mt-2'>Follow Us</h6>
            <div  style={{display:'flex',justifyContent:'left',gap:'10px'}} className='mt-3'>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-threads"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>

    </div>
    <p style={{fontSize:'12px'}} className='text-center mt-5'>&copy;2001-2024 shopifycart.com, Inc. or its affiliates.</p>

</div>
  )
}

export default Footer