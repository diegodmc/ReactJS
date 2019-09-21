import React, {Component} from "react";

import api from '../../services/api.js';

import './style.css';

export default class Product extends Component{
    state = {
        product: []
    }

    componentDidMount(){
        this.loadProduct();
    }

    loadProduct = async() => {

       const { id } = this.props.match.params;

       const response = await api.get(`products/${id}`);

       const {...product } = response.data;
       
       this.setState({ product });

    }
    render(){
        const { product } =this.state;
        
        return (
               <div className="product-info">
               {
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <p>
                               URL : <a href={product.url}>{product.url}</a>
                            </p>
                        </article>
                }
               </div> 
        )};
}