import React from 'react';

function About() {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-8 bg-white text-black dark:bg-slate-800 dark:text-white'>
            <div className='w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2'>
                <div className='space-y-8'>
                    <h1 className='md:text-4xl font-bold text-2xl'>
                        About MyBookStore
                    </h1>
                    <p className='text-md md:text-lg'>
                        Welcome to MyBookStore, your one-stop online shop for books that cater to all your literary needs. Our mission is to provide an extensive selection of books, from the latest bestsellers to timeless classics, all at competitive prices.
                    </p>
                    <p className='text-md md:text-lg'>
                        At MyBookStore, we believe that books have the power to transform lives. We are committed to creating a platform where readers can discover new stories, learn about different cultures, and enrich their minds. Whether you’re looking for fiction, non-fiction, academic material, or children’s books, our store has it all.
                    </p>
                    <p className='text-md md:text-lg'>
                        Our easy-to-use interface ensures a seamless shopping experience. You can search by author, genre, or title, and quickly find the books you love. We offer various formats, including hardback, paperback, and digital editions, so you can enjoy reading wherever you are.
                    </p>
                    <p className='text-md md:text-lg'>
                        In addition to selling books, we also host regular online events, book signings, and reading sessions with renowned authors. Our goal is to foster a strong community of book lovers who can share their passion and insights.
                    </p>
                    <p className='text-md md:text-lg'>
                        We are dedicated to customer satisfaction, and our support team is always ready to assist with any queries or concerns. We also offer fast, reliable shipping and easy returns to make your shopping experience hassle-free.
                    </p>
                    <p className='text-md md:text-lg'>
                        Thank you for choosing MyBookStore as your trusted source for books. Together, let's keep the joy of reading alive and growing.
                    </p>
                    <p className='text-md md:text-lg'>
                        Happy Reading!<br/>
                        The MyBookStore Team
                    </p>
                </div>
            </div>

            
        </div>
    );
}

export default About;
