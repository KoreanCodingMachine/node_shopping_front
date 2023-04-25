import React,  { useState } from 'react';
import {Row,Col,Container,Form,Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Indigator from '../component/Indigator'

const Signup = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({
        username:'',
        email:'',
        password:'',
        bio:false
    })

    const onChange = (event) => {
        const {name , value} = event.target

        const newInput = {
            ...inputs,
            [name] : value
        }

        setInputs(newInput)
    }


    const onSignupHandler = async (event) => {

        event.preventDefault()

        const { username, email, password, bio } = inputs

        const userInput = {
            username,
            email,
            password,
            bio
        }

        console.log(userInput)

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:7070/user/register', userInput)
            console.log(data)
            if (status === 200) {
                alert('회원가입 성공')
                navigate('/login')
            }

        } catch (err) {
            console.log(err.message)
        }
    }


    return (
        <Container>
        {
            loading
            ? <div className={'d-flex justify-content-center min-vh-100 align-items-center'}>
                <Indigator/>
            </div>
            : <Row className={'mt-5'}>
                <Col lg={'8'} xs={'12'} md={'10'} className={'offset-lg-2 offset-md-1'}>
                    <Form onSubmit={onSignupHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>username</Form.Label>
                            <Form.Control name='username' type="text" placeholder="Enter username" onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" onChange={onChange} />
                        </Form.Group>
                       <div className={'d-flex gap-2 mb-3'}>
                           <Form.Check
                               type={'radio'}
                               name={'bio'}
                               label={'male'}
                               value={0}
                               onChange={onChange}
                           />
                           <Form.Check
                               type={'radio'}
                               name={'bio'}
                               label={'female'}
                               value={1}
                               onChange={onChange}
                           />
                       </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        }
        </Container>
    );
};

export default Signup;