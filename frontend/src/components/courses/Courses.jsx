import React, { useEffect, useState } from 'react';
import Cards from '../freebook/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Courses() {

    const [book , setBook]= useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const res = await axios.get("http://localhost:8000/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);

            }
        }
        getBook();
    },[])
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className="mt-20 items-center justify-center text-center">
                    <h1 className="md:text-4xl font-bold text-center text-2xl">
                        We are delighted to Welcome you <span className="text-green-500">Here :)</span>
                    </h1>

                    <p className="mt-5 md:text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt placeat, impedit ipsum ex quo, molestias, quis illo veniam odio non magni culpa deleniti quisquam facilis aut quibusdam consectetur? Animi suscipit minus consequatur temporibus eius neque ab culpa itaque esse praesentium at dolores dolor cupiditate, debitis facilis sit voluptatum ipsam fugit.
                    </p>
                    <Link to="/">
                    <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 duration-300 mt-5" 
                    >
                        Back
                    </button>
                    </Link>
                    
                </div>

                {/* Adding gap-x for horizontal gap and gap-y for vertical gap */}
                <div className='mt-20 grid grid-cols-1 md:grid-cols-3 '>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Courses;
