import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingPage from '../assets/user.png';
import ProjectCard from '../components/ProjectCard';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getHomeProjectsApi } from '../services/allAPI';

function Home() {
  const [homeProjects,setHomeProjects] = useState([]);
  const navigate = useNavigate();
  const [loginStatus,setLoginStatus] = useState(false);
  console.log(homeProjects);



  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
    getHomeProjects() // Call getHomeProjects after defining it
  }, []);


const getHomeProjects = async () =>{
    try {
      const result = await getHomeProjectsApi()
      console.log(result);
      if (result.status==200){
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleprojects = () =>{
    if (loginStatus) {
      navigate('/projects');
    } else {
      toast.warning('Please login to get full access to our projects');
    }
  };
  

  return (
    <>
      {/*landing*/}
      <div style={{ minHeight: '100vh' }} className='w-100 d-flex justify-content-center align-items-center rounded shadow'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 style={{ fontSize: '80px' }}> <i class="fa-brands fa-docker"></i> Project Flair</h1>
              <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cum aspernatur quo perspiciatis, quis voluptas omnis laudantium maxime nemo totam laboriosam alias magnam. Nemo eum, maiores officiis dolore quod consequatur?</p>
              {
                loginStatus ?
                  <Link to={'/dashboard'} className='btn btn-warning'>Manage your dashboard <i className="fa-solid fa-arrow-right"></i></Link>
                  :
                  <Link to={'/login'} className='btn btn-warning'>Starts to Explore <i className="fa-solid fa-arrow-right"></i></Link>
              }
            </div>
            <div className='col-lg-6'>
              <img className='img-fluid' src={LandingPage} alt='' />
            </div>
          </div>
        </div>
      </div>
      {/*project*/}
      <div className='mt-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee>
          
          <div className='d-flex'>
            {
              homeProjects?.length>0 &&
              homeProjects?.map(project=>(
                <div key={project} className='me-5'>
                <ProjectCard displayData= {project} />
              </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleprojects} className='btn btn-link mt-3'>Click here to view more Projects ...</button>
      </div>
      {/*testimony*/}
      <div className='d-flex align-items-center mb-5 mt-3 flex-column'>
        <h1>Our Testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
          {/* Testimonial Cards */}
        </div>
      </div>
    </>
  );
}

export default Home;
