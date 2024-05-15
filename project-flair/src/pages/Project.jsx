import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { getAllProjectsApi } from '../services/allAPI'



function Project() {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects]= useState([])
  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try{
      const result = await getAllProjectsApi(searchKey,reqHeader)
      console.log(result);
      if(result.status==200){
        setAllProjects(result.data)
      }

    }catch(err){
      console.log(err);
    }
  }
  return (
  <>
  <Header/>
  <div style={{marginTop:'150px'}} className="container-fluid">
    <div className="d-flex justify-content-between">
      <h1>All projects</h1>
      <input onChange={e=>setSearchKey(e.target.value)} className='form-control w-25' type="text" placeholder='Search Project by language used' />
    </div>
    <Row className="mt-5">
     {
      allProjects?.length>0?
      allProjects?.map(project=>(
        <Col key={project} className='mb-3' sm={12} md={6} lg={4} >
          <ProjectCard displayData={project} />
        </Col>

      ))
      :
      <div className="fw-bolder text-danger m-5 text-center">Project Not Found!!!</div>
    }

    </Row>
  </div>

  </>
  )
}

export default Project