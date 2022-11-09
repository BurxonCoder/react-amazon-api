import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";
import '../sass/main.scss';
const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
    }, [])

    return (
        <>
            <div className="container-fluid">
               <div className="row">
                {data.map((product) => {
                    return(
                        <div className="col-3 mt-3 mb-5" key={product.id}>
                            <div className="card p-2">
                                <div className="card-header">
                                    <img width="300" height="300" src={product.image} alt="#"/>
                                </div>
                                <div className="card-body">
                                    <h4>{product.title}</h4>
                                    <p className="p0">Price: ${product.price}</p>
                                    <p className="p1">Rating: {product.rating.rate}</p>
                                    {/*<i><a href="#">#{product.category}</a></i>*/}
                                </div>
                                <div className="card-footer">
                                    <button type='button' className='btn btn-warning btn-block'>Sotib Olish</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
               </div>
            </div>
        </>
    );
};

export default Main;