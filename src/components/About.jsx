import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import data from '../data/products'

const About = () => {
    return (
        <div className='mt-4'>
            <Carousel>
                { data.map((oneProduct, index) => (
                    <Carousel.Item key={index} interval={5000}>
                    <img
                        className="d-block w-100"
                        src={oneProduct.imageUrl}
                        alt={oneProduct.name}
                    />
                    <Carousel.Caption>
                        <h3>{oneProduct.name}</h3>
                        <p>Price: {oneProduct.price} $</p>
                    </Carousel.Caption>
                </Carousel.Item> 
                ))
                                  
                }
                
            </Carousel>
        </div>
    )
}

export default About