import React, {useState, useEffect} from 'react'
import {Table, Button } from 'react-bootstrap'
import axios from 'axios'
import { MyVerticallyCenteredModal } from './Modal'

function Courses() {
    const [data, setData] = useState([])
    const [course, setCourse] = useState('')
    const [modalShow, setModalShow] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:3001/course').then(res => setData(res.data))
    },[])
    return (
        <div>
            <h1 className="products-heading" style={{textAlign:"center", margin:"100px 0px 30px"}}>Courses</h1>
            <Table striped bordered hover variant="dark" style={{width:"50%", margin:"0px auto 228px"}}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Course</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(index => (
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.course}</td>
                            <td style={{textAlign:"center"}}><Button onClick={()=> {setModalShow(true) 
                            setCourse(index.course)}} variant="primary">Equiry</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <MyVerticallyCenteredModal course={course} show={modalShow} onHide={()=>setModalShow(false)}/>
        </div>
    )
}

export default Courses
