import React from 'react';
import MailInput from './MailInput';
import banner from '../../../public/banner.jpg';

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2'>
                    <div className='space-y-8 '>
                        <h1 className='md:text-4xl font-bold text-2xl'>Find your next adventure, whether it’s a thrilling mystery, heartwarming romance, or life-changing non-fiction.</h1>

                        <h1 className='md:text-1xl font-semibold text-red-500 text-md'>
                            Start Reading Today! | Browse Our Collection | Discover New Releases
                        </h1>
                        <MailInput/>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                
                <div className='w-full md:w-1/2 md:order-2 order-1'>
                    {/* Set max width and height for the image */}
                    <img 
                        src={banner} 
                        alt="Bookstore Banner" 
                        className='w-full h-auto max-w-full max-h-[500px] object-cover' 
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
