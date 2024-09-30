import React from 'react';
import GenderCheckbox from './GenderCheckbox'; // Assuming you want to use this in the future
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Close the modal after successful submission
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen dark:bg-gray-900 text-white'>
            <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800 bg-opacity-90 mx-auto'>
                <div className='flex flex-row justify-center items-center gap-1 hover:transform hover:scale-110 transition-transform duration-200'>
                    <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                    <span className='text-3xl font-bold text-green-400'>MybookStore</span>
                </div>
                <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="fullName" className='label mb-0.5'>
                            <span className='text-lg label-text text-green-400 hover:transform hover:scale-110 transition-transform duration-200'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("fullName", { required: true })}
                            placeholder='Enter Fullname'
                            className='input input-bordered w-full mb-1.5 bg-gray-700 text-white border-none'
                        />
                        {errors.fullName && <span className='text-red-500'>This field is required</span>}

                        <label htmlFor="email" className='label mb-0.5'>
                            <span className='text-lg label-text text-green-400 hover:transform hover:scale-110 transition-transform duration-200'>Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder='Enter your email'
                            className='input input-bordered w-full mb-1.5 bg-gray-700 text-white border-none'
                        />
                        {errors.email && <span className='text-red-500'>This field is required</span>}

                        <label htmlFor="password" className='label mb-0.5'>
                            <span className='text-lg label-text text-green-400 hover:transform hover:scale-110 transition-transform duration-200'>Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder='Password'
                            className='input input-bordered w-full mb-1.5 bg-gray-700 text-white border-none'
                        />
                        {errors.password && <span className='text-red-500'>This field is required</span>}

                        <label htmlFor="confirmPassword" className='label mb-0.5'>
                            <span className='text-lg label-text text-green-400 hover:transform hover:scale-110 transition-transform duration-200'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("confirmPassword", { required: true })}
                            placeholder='Confirm Password'
                            className='input input-bordered w-full mb-1.5 bg-gray-700 text-white border-none'
                        />
                        {errors.confirmPassword && <span className='text-red-500'>This field is required</span>}

                        <a className="text-white p-2 cursor-pointer px-3 py-2 rounded-md hover:underline duration-300"
                            onClick={() => document.getElementById('my_modal_3').showModal()}>
                            Already have an account? Login
                        </a>
                        <Login />

                        <button type='submit' className='btn btn-primary w-full mt-2 bg-green-500 hover:bg-green-600 hover:transform hover:scale-105 transition-transform duration-200'>
                            Sign Up
                        </button>
                        <div className='flex justify-center items-center mt-3'>
                            <Link to={"/"}>
                                <a href="#" className='hover:underline hover:scale-105 transition-transform duration-200'>Go Home</a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
