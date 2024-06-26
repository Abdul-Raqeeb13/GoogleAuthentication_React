import React from 'react'
import firebase from 'firebase/compat/app';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


export default function WelcomePage() {

    const nav = useNavigate()

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            toast("Logout successfull", {
                position: "top-center",
                autoClose: 5018,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            nav("/")
        }).catch((error) => {
            toast(error.message);
        });
    }

    return (

        <>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={5018}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <h1>Welcome to our website</h1>
                <button className='w-24 h-8 bg-green-500 text-white rounded border border-cyan-300' onClick={() => signOut()}>Logout</button>

            </div>
            </>
            )
}
