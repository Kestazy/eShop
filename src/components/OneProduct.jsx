import React from 'react'
import data from "../data/products";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const OneProduct = ({addToCart}) => {
    return (
        <div className='d-flex flex-wrap justify-content-center mt-4'>
            { data.map((oneProduct, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={oneProduct.imageUrl} />
                <Card.Body>
                    <Card.Title>{oneProduct.name}</Card.Title>
                    <Card.Text>{oneProduct.description}</Card.Text>
                    <Card.Text>{oneProduct.price}</Card.Text>
                    <Button onClick={() => addToCart(oneProduct)} variant="primary">Buy</Button>
                </Card.Body>
            </Card> 
            ))   
            }   
        </div>
    )
}

export default OneProduct