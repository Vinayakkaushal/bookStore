import React from 'react'
import { useAuth } from './context/AuthProvider'
import toast from 'react-hot-toast';
export default function Logot() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user : null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successful");
            window.location.reload();
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md"
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}
