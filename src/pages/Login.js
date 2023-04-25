import React, {useRef, useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'
import Indigator from "../component/Indigator";

const Login = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })

    const [cookie, setCookie, removeCookie] = useCookies(['token'])



    const onChange = (event) => {

        const {name, value} = event.target

        const newInput = {
            ...inputs,
            [name] : value
        }

        setInputs(newInput)

    }

    const onSubmitLogin = async (event) => {
        event.preventDefault()

        const {email, password} = inputs

        const userInput = {
            email,
            password
        }

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:7070/user/login', userInput)
            console.log(data)
            console.log(status)
            if (status === 200) {
                setLoading(false)
                setCookie('token',data.token)
                navigate('/profile')
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
                    :  <Row className={'mt-5'}>
                        <Col lg={'8'} xs={'12'} md={'10'} className={'offset-lg-2 offset-md-1'}>
                            <Form onSubmit={onSubmitLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={onChange} name='email' />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={onChange} name='password' />
                                </Form.Group>
                                <div className={'d-flex align-items-center justify-content-center'}>
                                    <Button variant="primary" type="submit" size={'lg'}>
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

export default Login;
