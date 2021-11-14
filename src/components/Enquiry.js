import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

function Enquiry() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/enquiry').then(res => setData(res.data))
    },[])
    return (
        <div>
            <h1 className="products-heading" style={{textAlign:"center", margin:"100px 0px 30px"}}>Courses</h1>
            <Table striped bordered hover variant="dark" style={{width:"90%", margin:"0px auto 300px"}}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(index => (
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.name}</td>
                            <td>{index.email}</td>
                            <td>{index.course}</td>
                            <td style={{width:"500px"}}>{index.query}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Enquiry
