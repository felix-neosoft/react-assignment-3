import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Container, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

function Products() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/products').then(res => setData(res.data))
    },[])

    return (
        <Container style={{margin:"50px 0px"}} fluid>
            <h1 className="products-heading" style={{textAlign:"center", margin:"30px 0px"}}>Products</h1>
            <Card style={{margin:"40px 0px"}}>
                <Card.Img variant="top" src="images/wall-watch.jpg" />
                <Card.Body>
                    <Card.Text className="products-title" style={{textAlign:"center"}}>
                        Premium Watches for Business.
                    </Card.Text>
                </Card.Body>
            </Card>
            {data.map(index => (
                <Card key={index.id} style={{ width: '18rem', display:"inline-block", margin:"0px 40px"}}>
                    <Card.Img style={{margin:"20px 0px"}} variant="top" height="350" src={index.image} />
                    <Card.Body>
                        <Card.Title className="products-name" style={{textAlign:"center", margin:"20px 0px"}}>{index.name}</Card.Title>
                        <Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Quantity : {index.quantity}</ListGroupItem>
                                <ListGroupItem>Price : {index.price}/-</ListGroupItem>
                            </ListGroup>                           
                        </Card.Text>
                        <hr style={{width:"100px", margin:"0px auto"}}/>
                        <Button style={{marginLeft:'8rem', marginTop:"20px"}}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default Products
