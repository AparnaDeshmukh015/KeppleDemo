import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {getUserLogin} from '../../redux/authSlice';
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
const Login:React.FC<{}> = () => {
  
    const{status}=useSelector((state:any)=>state.user);
    const navigate:any= useNavigate();
    const dispatch:any= useDispatch();
    const [userData, setUserData] = useState({
        "UserName":"",
        "PassWord":""
    });

    useEffect(()=>{
    if(status){
      navigate('/home');
    } else {
        navigate('/');
    }
    },[status]) ;

    const handlerChange =(e:any) => {
       e.preventDefault();
       const{name}=e.target;
       setUserData({...userData, [name]:e.target.value});
    }

    
    const handlerSubmit=(e:any) => {
        e.preventDefault();
        dispatch(getUserLogin(userData));
        

    }
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Login to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form >

                        <div className="mt-6">
                            <label  className="block text-sm font-medium leading-5  text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input  name="UserName" placeholder="user@example.com" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                onChange={(e)=>handlerChange(e)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label  className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="PassWord" type="text"  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                onChange={(e)=>handlerChange(e)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                    <button  onClick={(e)=>handlerSubmit(e)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                     >
                        
                    Login with Net
                    </button>
                    <button  onClick={(e)=>handlerSubmit(e)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                     >
                        
                   Login with Node
                    </button>
                </span>
                        </div>
                        {/* <Link to='/Register' classNameName="font-medium text-purple-600 hover:text-purple-500 text-center">Create New Account</Link> */}
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;  
