import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import Indigator from "../component/Indigator";

const ProductDetail = () => {

    const location = useLocation()

    const param = useRef(location.pathname.slice(9))

    const [productDetailData, setProductDetailData] = useState({})

    const [loading, setLoading] = useState(false)
    const getDetailProductData = async () => {

        setLoading(true)

        try {
            const { data, status } = await axios.get(`http://localhost:7070/product/${param.current}`)

            if (status === 200) {
                setLoading(false)
                setProductDetailData(data.product)
                console.log(data.product)
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getDetailProductData()
    } ,[])

    return (
        <>
            {
                loading
                    ?<div className={'d-flex justify-content-center align-items-center min-vh-100'}>
                        <Indigator/>
                     </div>
                    : <div>
                        <h1>Product Detail Page</h1>
                        <h2>category:{productDetailData.category}</h2>
                        <h2>description:{productDetailData.description}</h2>
                        <h2>name:{productDetailData.name}</h2>
                        <h2>price:{productDetailData.price+'$'}</h2>
                    </div>
            }
        </>
    );
};
export default ProductDetail;
