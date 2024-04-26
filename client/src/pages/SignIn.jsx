import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure  } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

function SignIn() {
  const [formData,setFormData]=useState({});
  //const [errorMessage,setErrorMessage]=useState(null);
  //const [loading,setLoading]=useState(false);
const {loading,error:errorMessage}=useSelector(state=>state.user);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange=(e) => {
    setFormData({...formData,[e.target.id]:e.target.value.trim()});
    
    //console.log(e.target.value);
  };
//console.log(formData);
const handleSubmit=async(e)=>{
  e.preventDefault();//prevent default refreshing of page'
  if(!formData.email||!formData.password){
  //return setErrorMessage('Please fill out all fields');
  return dispatch(signInFailure('Please fill all the fields'));
  }
  try{
    //setLoading(true);
    //setErrorMessage(null);
    dispatch(signInStart());
const res=await fetch('/api/auth/signin',{
  method: 'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(formData),
  });
  const data=await res.json();
  if(data.success===false){
    //return setErrorMessage(data.message);
    dispatch(signInFailure(data.message));
  }
  //setLoading(false);
  if(res.ok){
  dispatch(signInSuccess(data));
    navigate('/')
  }
}catch(error){
  //client side error
  //setErrorMessage(error.message);
  //setLoading(false);
  dispatch(signInFailure(error.message));
  }
}
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/*left*/}
      <div className='flex-1'>
      <Link 
      to='/' 
      className='font-bold dark:text-white text-4xl'>
      <span>Blog</span>
      <span className='px-2 py-1 bg-gradient-to-r  from-blue-500 to-indigo-900 rounded-lg text-white'>
          Insights
      </span>
      </Link>
      <p className='text-sm mt-5'>
      This is a demo project. You can signin with email or password or google
      </p>
      </div>
      {/*right*/}

      <div className='flex-1'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      
      <div>
      <Label value='Your email' />
      <TextInput
        type='email'
        placeholder='name@company.com'
        id='email' onChange={handleChange}
/>
      </div>
      <div>
      <Label value='Your password' />
      <TextInput
        type='password'
        placeholder='**********'
        id='password' onChange={handleChange}
/>
      </div>
      <Button className='w-80 h-10' color='gray' pill   style={{
        background: 'linear-gradient(to right,  #ADD8E6, #00008B)', // light to dark Blue gradient
        color: 'white',
        display: 'flex', 
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        lineHeight: '1'}} type='submit' disabled={loading}>
          {
            loading?(
              <>
              <Spinner size='sm'/>
              <span className='pl-3'>Loading..</span>
              </>
             
          ):'Sign In'
          }
      </Button>
      <OAuth />

      </form>
      <div className="flex gap-2 text-sm mt-5">
      <span>Don't have an account?</span>
      <Link to='/sign-up' className='text-blue-500'>
      Sign Up
      </Link>    
      </div>
      {
        errorMessage && (
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">{errorMessage}</span>
  </div>
        )
      }

      </div>
      </div>
    </div>
  )
}

export default SignIn;
