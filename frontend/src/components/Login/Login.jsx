import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:8000/user/login", userInfo)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    toast.success("Login successful");
                    setTimeout(() => {
                        const modal = document.getElementById('my_modal_3');
                        if (modal) {
                            modal.close();
                        }
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(response.data));
                    },3000)

                }
                
            }).catch((error) => {
                toast.error(error.message);
                console.log(error.message);
            });
        console.log(data);
        // Close the modal after successful submission
        // const modal = document.getElementById('my_modal_3');
        // if (modal) {
        //     modal.close();
        // }
    };

    const handleSignupClick = () => {
        // Close the modal when "Sign Up" is clicked
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    };

    return (
        <div className='dark:bg-slate-800 dark:text-white'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box flex flex-col dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleSignupClick}>✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-2 space-y-3">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                {...register("email", { required: true })}
                                className='input input-bordered w-full h-10 px-4 mt-2 dark:text-black'
                                placeholder='Enter your email'
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mt-2 space-y-3">
                            <span>Password</span>
                            <br />
                            <input type="password"
                                {...register("password", { required: true })}
                                className='input input-bordered w-full h-10 px-4 mt-2 dark:text-black'
                                placeholder='Enter your password'
                            />
                            {errors.password && <span>This field is required</span>}
                        </div>

                        <div className="mt-2 space-y-3 flex flex-row justify-between">
                            <button className="btn btn-success text-white rounded-md w-20">Login</button>
                            <span>Not registered yet?
                                <Link to="/signup"
                                    className='link text-blue-600 underline link-hover hover:text-blue-800 scale-95'
                                    onClick={handleSignupClick} // Close modal on click
                                >
                                    Sign Up
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
