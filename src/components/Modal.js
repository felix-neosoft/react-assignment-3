import React, {useState, useRef, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import axios from 'axios'

const RegForEmail = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.com$');
const RegForName = RegExp('^[a-zA-Z]+\\s[a-zA-Z]+$')
const RegForQuery = RegExp('^[a-zA-Z0-9 ]{5,150}$')

export function MyVerticallyCenteredModal(props) {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const queryRef = useRef(null)
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')
    const [ename,setEname] = useState('')
    const [eemail,setEemail] = useState('')
    const [equery, setEquery] = useState('')

    useEffect(()=>{
      setName('')
      setEmail('')
      setQuery('')
      setEname('')
      setEemail('')
      setEquery('')
    },[props.show])

    const handler = e =>{
      let input = e.target.name
      switch(input){
        case 'name':
          setEname(RegForName.test(nameRef.current.value)?'':'Please enter full name')
          setName(nameRef.current.value)
          break
        
        case 'email':
          setEemail(RegForEmail.test(emailRef.current.value)?'':'Please enter email in correct format')
          setEmail(emailRef.current.value)
          break

        case 'query':
          setEquery(RegForQuery.test(queryRef.current.value)?'':'Please enter query of atleast 5 chanracters')
          setQuery(queryRef.current.value)
          break
        default: 
      }
    }

    const onSubmit = () =>{
      if(ename === '' && eemail === '' && equery ===''){
        if(name !== '' && email !== '' && query !== ''){
          const formData = {"course":props.course, "name":nameRef.current.value, "email":emailRef.current.value, "query":queryRef.current.value}
          axios.post('http://localhost:3001/enquiry',formData).catch(err=> alert(err.message))
          props.onHide()

        }else{alert("Enquiry Submission Failed! Input Fields Empty")}
      }else{alert("Enquiry Submission Failed! Validation Error")}
        
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Equiry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Course Name</Form.Label>
                <Form.Control type="text" value={props.course} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" ref={nameRef} onChange={e=> handler(e)} isInvalid={ename!==''?true:false} isValid={name!==''?true:false} />
                <Form.Control.Feedback type="invalid">{ename}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" ref={emailRef} onChange={e=>handler(e)} isInvalid={eemail!==''?true:false} isValid={email!==''?true:false} />
                <Form.Control.Feedback type="invalid">{eemail}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Query</Form.Label>
                <Form.Control as="textarea" name="query" ref={queryRef} rows={3} onChange={e=>handler(e)} isInvalid={equery!==''?true:false} isValid={query!==''?true:false} />
                <Form.Control.Feedback type="invalid">{equery}</Form.Control.Feedback>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
}

  