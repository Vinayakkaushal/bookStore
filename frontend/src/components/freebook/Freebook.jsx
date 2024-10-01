import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';
import { useEffect, useState } from 'react';
function Freebook() {

    const [book , setBook]= useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const res = await axios.get("http://localhost:8000/book");
                console.log(res.data);
                setBook(res.data.filter((item) => item.category === "free"))
            } catch (error) {
                console.log(error);

            }
        }
        getBook();
    },[])


    const filteredList = book.filter((item) => item.category === "free");
    console.log(filteredList);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'>
                <div>
                <h1 className='text-xl font-bold pb-2'>
                    Free Offered Courses
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deserunt. Ab nam omnis animi cum explicabo repellendus iure amet, culpa vel, odit ad tempore labore earum magnam, aliquid vitae id?
                </p>
                </div>
            
            <div>
                <Slider {...settings}>
                    {filteredList.map((item) => (
                        <div key={item.id}>
                            <Cards item={item} key={item.id}/>
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
        </>
    )
}

export default Freebook