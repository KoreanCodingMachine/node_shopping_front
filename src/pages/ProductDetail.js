import React, {useEffect, useRef} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {

    const location = useLocation()

    const param = useRef(location.pathname.slice(9))

    const getDetailProductData = async () => {
        try {
            const { data, status } = await axios.get(`http://localhost:7070/product/${param.current}`)
            console.log(data,status)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getDetailProductData()
    } ,[])

    return (
        <div>
            <h1>Product Detail Page</h1>
        </div>
    );
};

export default ProductDetail;