import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import {Container} from "react-bootstrap";
import axios from "axios";
import Indigator from "../component/Indigator";
import {useNavigate} from "react-router-dom";
const Product = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(false)
    const getProductData = async () => {

        setLoading(true)

        try {
            const { data, status } = await axios.get('http://localhost:7070/product')
            console.log(data.products)

            if (status === 200) {
                setLoading(false)
                setProducts(data.products)
                console.log(data.products[0]._id)
                console.log('??????????????', products)
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getProductData()
    },[])

    if (loading) {
        return <Indigator />;
    }

    if (products === undefined) {
        return <div>Loading...</div>;
    }

    return (
      <Container>
         <div className={'d-flex justify-content-center align-items-center mt-5'}>
             <Table striped bordered hover>
                 <thead>
                 <tr className={'text-center'}>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Description</th>
                     <th>Category</th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                     products.map((product) => (
                         <tr key={product._id} className={'text-center'} onClick={() => {navigate(`/product/${product._id}`)}} >
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>{product.description}</td>
                             <td>{product.category}</td>
                         </tr>
                     ))
                 }
                 </tbody>
             </Table>
         </div>
      </Container>
    );
};

export default Product;