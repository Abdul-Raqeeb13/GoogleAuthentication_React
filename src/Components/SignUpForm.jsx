import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import { ToastContainer, toast } from "react-toastify";
import firebase from '../Config/Firebase';

export default function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()

  // create user with email and password
  const createAccount = async (email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      

      toast("account create", {
        position: "top-center",
        autoClose: 5018,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      nav("/Home")


    } catch (error) {
      // console.error("Error code:", error.code);
      // console.error("Error message:", error.message);
      toast(error.message);

    }
  };

  // sign in with google
  const googleSignIn =async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
        .then((result) => {

            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            console.log(user)
            nav("/Home")


        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;

            var email = error.email;

            var credential = error.credential;
            console.log(error)

        });
}




  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAccount(email, password);
  };

  return (
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
      <h1 className='text-center text-2xl'>Signup</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-11 border-2 border-indigo-600 rounded-md bg-stone-300 p-8 ">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="24yjgsa65" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <br />
        <p onClick={()=>googleSignIn()} className="mt-6 text-center text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-auto">Sign in with Google</p>

        <p className='text-center mt-3'>Already have an account <Link className='text-blue-500' to={"/signin"}>SignIn</Link></p>
      </form>
    </div>
  );
}
